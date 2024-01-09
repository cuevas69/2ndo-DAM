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
package org.exist.storage;

import org.exist.EXistException;
import org.exist.collections.Collection;
import org.exist.dom.persistent.BinaryDocument;
import org.exist.dom.persistent.LockedDocument;
import org.exist.security.PermissionDeniedException;
import org.exist.storage.lock.Lock;
import org.exist.storage.txn.Txn;
import org.exist.test.ExistEmbeddedServer;

import static java.nio.charset.StandardCharsets.UTF_8;
import static org.exist.test.TestConstants.TEST_COLLECTION_URI;
import static org.junit.Assert.*;

import org.exist.util.LockException;
import org.exist.util.MimeType;
import org.exist.util.StringInputSource;
import org.exist.xmldb.XmldbURI;
import org.junit.ClassRule;
import org.junit.Test;
import org.xml.sax.SAXException;

import java.io.IOException;
import java.util.Optional;

public class ModificationTimeTest {

    private static final String XML_FILENAME = "test.xml";
    private static final String VALID_XML = "<?xml version=\"1.0\"?>" +
            "<valid/>";
    private static final String INVALID_XML = "<?xml version=\"1.0\"?>"
            + "<invalid>";


    /**
     * Store a binary document, wait for a while and then overwrite it
     * with another binary document. The document's modification time should
     * have been updated afterwards.
     */
    @Test
    public void check_if_modification_time_is_updated_binary() throws EXistException, InterruptedException, PermissionDeniedException, LockException, IOException, SAXException {

        final String mimeType = "application/octet-stream";
        final String filename = "data.dat";
        final String data = "some data";

        final BrokerPool pool = existEmbeddedServer.getBrokerPool();
        try(final DBBroker broker = pool.get(Optional.of(pool.getSecurityManager().getSystemSubject()));
            final Txn transaction = pool.getTransactionManager().beginTransaction()) {
            BinaryDocument binaryDoc = storeBinary(broker, transaction, filename, data, mimeType);
            assertNotNull(binaryDoc);

            final long modificationTimeBefore = binaryDoc.getLastModified();

            Thread.sleep(1);

            binaryDoc = storeBinary(broker, transaction, filename, data, mimeType);
            assertNotNull(binaryDoc);

            final long modificationTimeAfter = binaryDoc.getLastModified();
            //check the mimetype has been preserved across database restarts
            assertNotEquals(modificationTimeBefore, modificationTimeAfter);

            transaction.commit();
        }
    }

    /**
     * Store a valid XML resource, wait for a while and then overwrite it
     * with another valid XML resource. The resource's modification time should
     * have been updated afterwards.
     */
    @Test
    public void check_if_modification_time_is_updated_xml() throws EXistException, InterruptedException, PermissionDeniedException, LockException, IOException, SAXException {
        final BrokerPool pool = existEmbeddedServer.getBrokerPool();
        try(final DBBroker broker = pool.get(Optional.of(pool.getSecurityManager().getSystemSubject()));
            final Txn transaction = pool.getTransactionManager().beginTransaction()) {
            storeXML(broker, transaction, XML_FILENAME, VALID_XML);
            final long modificationTimeBefore = getDocLastModified(broker, transaction, XML_FILENAME);

            Thread.sleep(1);

            storeXML(broker, transaction, XML_FILENAME, VALID_XML);
            final long modificationTimeAfter = getDocLastModified(broker, transaction, XML_FILENAME);

            assertNotEquals(modificationTimeBefore, modificationTimeAfter);

            transaction.commit();
        }
    }

    /**
     * Store a valid XML resource, wait for a while and then try to overwrite
     * it with an invalid XML resource. The invalid XML should be rejected and
     * the resource's modification time should be the same afterwards.
     */
    @Test
    public void check_if_modification_time_is_not_updated_on_parse_error() throws EXistException, InterruptedException, PermissionDeniedException, LockException, IOException, SAXException {
        final BrokerPool pool = existEmbeddedServer.getBrokerPool();
        try(final DBBroker broker = pool.get(Optional.of(pool.getSecurityManager().getSystemSubject()));
            final Txn transaction = pool.getTransactionManager().beginTransaction()) {

            storeXML(broker, transaction, XML_FILENAME, VALID_XML);
            final long modificationTimeBefore = getDocLastModified(broker, transaction, XML_FILENAME);

            Thread.sleep(1);

            boolean threw = false;
            try {
                storeXML(broker, transaction, XML_FILENAME, INVALID_XML);
            } catch (final SAXException e) {
                threw = true;
            }
            assertTrue(threw);

            final long modificationTimeAfter = getDocLastModified(broker, transaction, XML_FILENAME);

            assertEquals(modificationTimeBefore, modificationTimeAfter);

            transaction.commit();
        }
    }

    @ClassRule
    public static final ExistEmbeddedServer existEmbeddedServer = new ExistEmbeddedServer(true, true);

    private BinaryDocument storeBinary(final DBBroker broker, final Txn transaction, final String name,  final String data, final String mimeType) throws EXistException, PermissionDeniedException, IOException, SAXException, LockException {
        final Collection root = broker.getOrCreateCollection(transaction, TEST_COLLECTION_URI);
        broker.saveCollection(transaction, root);
        assertNotNull(root);

        root.storeDocument(transaction, broker, XmldbURI.create(name), new StringInputSource(data.getBytes(UTF_8)), new MimeType(mimeType, MimeType.BINARY));
        return (BinaryDocument) root.getDocument(broker, XmldbURI.create(name));
    }

    private void storeXML(final DBBroker broker, final Txn transaction, final String name, final String xml) throws EXistException, PermissionDeniedException, IOException, LockException, SAXException {
        final Collection root = broker.getOrCreateCollection(transaction, TEST_COLLECTION_URI);
        broker.saveCollection(transaction, root);
        assertNotNull(root);

        broker.storeDocument(transaction, XmldbURI.create(name), new StringInputSource(xml), MimeType.XML_TYPE, root);
    }

    private long getDocLastModified(final DBBroker broker, final Txn transaction, final String name) throws PermissionDeniedException {
        try (final LockedDocument lockedDocument = broker.getXMLResource(TEST_COLLECTION_URI.append(name), Lock.LockMode.READ_LOCK)) {
            assertNotNull(lockedDocument);
            return lockedDocument.getDocument().getLastModified();
        }
    }
}
