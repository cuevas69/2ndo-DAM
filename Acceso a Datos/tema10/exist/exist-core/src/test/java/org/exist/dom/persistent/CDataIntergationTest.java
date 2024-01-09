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

package org.exist.dom.persistent;

import org.apache.http.HttpHost;
import org.apache.http.HttpResponse;
import org.apache.http.client.fluent.Executor;
import org.apache.http.client.fluent.Request;
import org.exist.TestUtils;
import org.exist.test.ExistWebServer;
import org.apache.commons.io.output.UnsynchronizedByteArrayOutputStream;
import org.exist.xmldb.DatabaseImpl;
import org.exist.xmldb.XmldbURI;
import org.junit.ClassRule;
import org.junit.Test;
import org.junit.rules.TemporaryFolder;
import org.xmldb.api.DatabaseManager;
import org.xmldb.api.base.Collection;
import org.xmldb.api.base.Database;
import org.xmldb.api.base.Resource;
import org.xmldb.api.base.XMLDBException;
import org.xmldb.api.modules.XMLResource;

import java.io.IOException;

import static java.nio.charset.StandardCharsets.UTF_8;
import static org.apache.http.HttpStatus.SC_CREATED;
import static org.junit.Assert.*;

/**
 * Tests for retrieving a document containing CDATA via
 * various APIs.
 */
public class CDataIntergationTest {

    @ClassRule
    public static final ExistWebServer existWebServer = new ExistWebServer(true, false, true, true);

    @ClassRule
    public static final TemporaryFolder tempFolder = new TemporaryFolder();

    private final static String cdata_content = "Hello there \"Bob?\"";
    private final static String cdata_xml = "<elem1><![CDATA[" + cdata_content + "]]></elem1>";

    @Test
    public void cdataRestApi() throws IOException {
        final String uri = "http://localhost:" + existWebServer.getPort() + "/exist/rest/db";
        final String docUri = uri + "/rest-cdata-test.xml";

        final Executor executor = Executor
                .newInstance()
                .auth(TestUtils.ADMIN_DB_USER, TestUtils.ADMIN_DB_PWD)
                .authPreemptive(new HttpHost("localhost", existWebServer.getPort()));

        // store document
        final HttpResponse storeResponse = executor.execute(
                Request
                        .Put(docUri)
                        .addHeader("Content-Type", "application/xml")
                        .bodyByteArray(cdata_xml.getBytes(UTF_8))
                ).returnResponse();
        assertEquals(SC_CREATED, storeResponse.getStatusLine().getStatusCode());

        // retrieve document
        final HttpResponse retrieveResponse = executor.execute(
                Request
                        .Get(docUri)
                ).returnResponse();
        try (final UnsynchronizedByteArrayOutputStream baos = new UnsynchronizedByteArrayOutputStream()) {
            retrieveResponse.getEntity().writeTo(baos);
            assertEquals(cdata_xml, baos.toString(UTF_8));
        }
    }

    @Test
    public void cdataXmlDbApi() throws XMLDBException {
        final String docName = "xmldb-cdata-test.xml";
        final Database database = new DatabaseImpl();
        DatabaseManager.registerDatabase(database);

        // store document
        Collection root = DatabaseManager.getCollection(XmldbURI.LOCAL_DB, TestUtils.ADMIN_DB_USER, TestUtils.ADMIN_DB_PWD);
        try {
            final Resource resource = root.createResource(docName, XMLResource.RESOURCE_TYPE);
            resource.setContent(cdata_xml);
            root.storeResource(resource);
        } finally {
            root.close();
        }

        // retrieve document
        root = DatabaseManager.getCollection(XmldbURI.LOCAL_DB, TestUtils.ADMIN_DB_USER, TestUtils.ADMIN_DB_PWD);
        try {
            final Resource resource = root.getResource(docName);
            assertNotNull(resource);
            assertEquals(cdata_xml, resource.getContent().toString());
        } finally {
            root.close();
        }
    }
}
