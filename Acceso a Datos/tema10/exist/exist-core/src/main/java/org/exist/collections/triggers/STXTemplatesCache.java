/*
 * eXist-db Open Source Native XML Database
 * Copyright (C) 2001 The eXist-db Authors
 *
 * info@exist-db.org
 * http://www.exist-db.org
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 */
package org.exist.collections.triggers;

import javax.xml.transform.Templates;
import javax.xml.transform.TransformerConfigurationException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.sax.SAXTransformerFactory;
import javax.xml.transform.sax.TemplatesHandler;

import com.github.benmanes.caffeine.cache.Cache;
import com.github.benmanes.caffeine.cache.Caffeine;
import net.jcip.annotations.ThreadSafe;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.exist.dom.persistent.DocumentImpl;
import org.exist.storage.DBBroker;
import org.exist.storage.lock.ManagedDocumentLock;
import org.exist.storage.serializers.Serializer;
import org.exist.util.LockException;
import org.exist.xmldb.XmldbURI;
import org.xml.sax.SAXException;

/**
 * Cache for STX Templates.
 *
 * The cache is concurrent, however requests
 * for each stylesheet use a READ_LOCK per document.
 *
 * @author <a href="mailto:adam@exist-db.org">Adam Retter</a>
 */
@ThreadSafe
public class STXTemplatesCache {

    private static final  Logger LOG = LogManager.getLogger(STXTemplatesCache.class);
    private static final STXTemplatesCache INSTANCE = new STXTemplatesCache();

    private final SAXTransformerFactory factory;
    private final Cache<XmldbURI, CachedTemplate> cache;

    private STXTemplatesCache() {
        this.factory = (SAXTransformerFactory)TransformerFactory.newInstance("net.sf.joost.trax.TransformerFactoryImpl", getClass().getClassLoader());
        this.cache = Caffeine.newBuilder()
                .maximumSize(250)
                .build();
    }

    public static STXTemplatesCache getInstance() {
        return INSTANCE;
    }

    /**
     * Will get the compiled stylesheet from the cache.
     *
     * If the stylesheet is not present in the cache it will be compiled and added to the cache.
     * If the stylesheet is in the cache, but older than the current stylesheet it will be re-compiled and cached.
     *
     * @param broker Database broker for accessing the serializer pool
     * @param stylesheet The stylesheet document
     * @throws TransformerConfigurationException if there is an error in the transformations
     * @throws SAXException if a SAX error comes up
     * @throws LockException if dbbroker is locked
     *
     * @return The compiled stylesheet
     */
    public Templates getOrUpdateTemplate(final DBBroker broker, final DocumentImpl stylesheet) throws TransformerConfigurationException, SAXException, LockException {
        try(final ManagedDocumentLock documentLock = broker.getBrokerPool().getLockManager().acquireDocumentReadLock(stylesheet.getURI())) {

            final XmldbURI stylesheetUri = stylesheet.getURI();
            final long lastModified = stylesheet.getLastModified();

            CachedTemplate cachedTemplate = cache.getIfPresent(stylesheetUri);
            if (cachedTemplate != null && lastModified > cachedTemplate.getLastUpdated()) {
                // template has been modified since the version in the cache
                cachedTemplate = null;  // invalidate the cached template
                LOG.trace("Invalidating cached STX Template '{}' as it is outdated.", stylesheetUri.toString());
            } else {
                LOG.trace("Retrieved STX Template '{}' from cache.", stylesheetUri.toString());
            }

            if(cachedTemplate == null) {
                // compile and cache the template
                final Templates compiled = compileTemplate(broker, stylesheet);
                cachedTemplate = new CachedTemplate(compiled, lastModified);
                cache.put(stylesheetUri, cachedTemplate);
                LOG.trace("Compiled and cached STX Template '{}'.", stylesheetUri.toString());
            }

            return cachedTemplate.templates;
        }
    }

    private Templates compileTemplate(final DBBroker broker, final DocumentImpl stylesheet) throws TransformerConfigurationException, SAXException {
        final Serializer serializer = broker.borrowSerializer();
        try {
            final TemplatesHandler thandler = factory.newTemplatesHandler();
            serializer.setSAXHandlers(thandler, null);
            serializer.toSAX(stylesheet);
            return thandler.getTemplates();
        } finally {
            broker.returnSerializer(serializer);
        }
    }

    private static class CachedTemplate {
        private final Templates templates;
        private final long lastUpdated;

        public CachedTemplate(final Templates templates, final long lastUpdated) {
            this.templates = templates;
            this.lastUpdated = lastUpdated;
        }

        private long getLastUpdated() {
            return lastUpdated;
        }

        private Templates getTemplate() {
            return templates;
        }
    }
}