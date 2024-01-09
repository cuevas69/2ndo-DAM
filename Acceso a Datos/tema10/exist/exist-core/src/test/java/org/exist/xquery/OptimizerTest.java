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
package org.exist.xquery;

import com.googlecode.junittoolbox.ParallelRunner;
import org.exist.EXistException;
import org.exist.TestUtils;
import org.exist.collections.triggers.TriggerException;
import org.exist.security.PermissionDeniedException;
import org.exist.test.ExistEmbeddedServer;
import org.exist.util.LockException;
import org.exist.util.io.InputStreamUtil;
import org.exist.xmldb.IndexQueryService;
import org.exist.xmldb.XmldbURI;
import org.junit.*;
import org.junit.runner.RunWith;
import org.xmldb.api.DatabaseManager;
import org.xmldb.api.base.Collection;
import org.xmldb.api.base.Database;
import org.xmldb.api.base.ResourceSet;
import org.xmldb.api.base.XMLDBException;
import org.xmldb.api.modules.CollectionManagementService;
import org.xmldb.api.modules.XMLResource;
import org.xmldb.api.modules.XQueryService;

import java.io.IOException;
import java.io.InputStream;
import java.net.URISyntaxException;

import static java.nio.charset.StandardCharsets.UTF_8;
import static org.exist.util.PropertiesBuilder.propertiesBuilder;
import static org.junit.Assert.assertEquals;
import static org.exist.samples.Samples.SAMPLES;

/**
 * 
 */
@RunWith(ParallelRunner.class)
public class OptimizerTest {

    private final static String OPTIMIZE = "declare option exist:optimize 'enable=yes';";
    private final static String NO_OPTIMIZE = "declare option exist:optimize 'enable=no';";
    private final static String NAMESPACES = "declare namespace mods='http://www.loc.gov/mods/v3';";

    private static final String MSG_OPT_ERROR = "Optimized query should return same number of results.";

    private final static String XML =
            "<root>" +
            "   <a><b>one</b></a>" +
            "   <a><c><b>one</b></c></a>" +
            "   <c><a><c><b>two</b></c></a></c>" +
            "</root>";

    private final static String COLLECTION_CONFIG =
        "<collection xmlns=\"http://exist-db.org/collection-config/1.0\">" +
    	"	<index xmlns:mods=\"http://www.loc.gov/mods/v3\">" +
    	"		<create qname=\"b\" type=\"xs:string\"/>" +
        "        <create qname=\"SPEAKER\" type=\"xs:string\"/>" +
        "        <create qname=\"mods:internetMediaType\" type=\"xs:string\"/>" +
        "	</index>" +
    	"</collection>";
    private static Collection testCollection;

    @Test
    public void nestedQuery() throws XMLDBException {
        execute("/root/a[descendant::b = 'one']", true, "Inner b node should be returned.", 2);
        execute("/root/a[b = 'one']", true, "Inner b node should not be returned.", 1);
        execute("/root/a[b = 'one']", false, "Inner b node should not be returned.", 1);
    }

    @Test
    public void simplePredicatesRegex() throws XMLDBException {
        long r = execute("//SPEECH[matches(SPEAKER, '^HAM.*')]", false);
        execute("//SPEECH[matches(SPEAKER, '^HAM.*')]", true, MSG_OPT_ERROR, r);
        r = execute("//SPEECH[starts-with(SPEAKER, 'HAML')]", false);
        execute("//SPEECH[starts-with(SPEAKER, 'HAML')]", true, MSG_OPT_ERROR, r);
        r = execute("//SPEECH[ends-with(SPEAKER, 'EO')]", false);
        execute("//SPEECH[ends-with(SPEAKER, 'EO')]", true, MSG_OPT_ERROR, r);
        r = execute("//SPEECH[matches(descendant::SPEAKER, 'HAML.*')]", false);
        execute("//SPEECH[matches(descendant::SPEAKER, 'HAML.*')]", true, MSG_OPT_ERROR, r);
    }

    @Test
    public void noOptimization() throws XMLDBException {
        long r = execute("/root//b[parent::c/b = 'two']", false);
        assertEquals(1, r);
        execute("/root//b[parent::c/b = 'two']", true, "Parent axis should not be optimized.", r);
        
        r = execute("/root//b[ancestor::a/c/b = 'two']", false);
        assertEquals(1, r);
        execute("/root//b[ancestor::a/c/b = 'two']", true, "Ancestor axis should not be optimized.", r);

        r = execute("/root//b[ancestor::a/b = 'two']", false);
        assertEquals(0, r);
        execute("/root//b[ancestor::a/b = 'two']", true, "Ancestor axis should not be optimized.", r);

        r = execute("/root//b[text()/parent::b = 'two']", false);
        assertEquals(1, r);
        execute("/root//b[text()/parent::b = 'two']", true, "Parent axis should not be optimized.", r);

        r = execute("/root//b[matches(text()/parent::b, 'two')]", false);
        assertEquals(1, r);
        execute("/root//b[matches(text()/parent::b, 'two')]", true, "Parent axis should not be optimized.", r);
    }

    @Test
    public void reversePaths() throws XMLDBException {
        long r = execute("/root//b/parent::c[b = 'two']", false);
        assertEquals(1, r);
        execute("/root//b/parent::c[b = 'two']", true, MSG_OPT_ERROR, r);
    }

    @Test
    public void reversePathsWithWildcard() throws XMLDBException {
        //parent with wildcard
        long r = execute("/root//b/parent::*[b = 'two']", false);
        assertEquals(1, r);
        execute("/root//b/parent::*[b = 'two']", true, MSG_OPT_ERROR, r);
    }

    @Test
    public void booleanOperator() throws XMLDBException {
        execute("//SPEECH[true() and false()]", true, MSG_OPT_ERROR, 0);
        execute("//SPEECH[true() and true()]", true, MSG_OPT_ERROR, 2628);
    }

    private long execute(String query, boolean optimize) throws XMLDBException {
        XQueryService service = (XQueryService) testCollection.getService("XQueryService", "1.0");
        if (optimize) {
            query = OPTIMIZE + query;
        } else {
            query = NO_OPTIMIZE + query;
        }
        query = NAMESPACES + query;
        ResourceSet result = service.query(query);
        return result.getSize();
    }

    private void execute(String query, boolean optimize, String message, long expected) throws XMLDBException {
        XQueryService service = (XQueryService) testCollection.getService("XQueryService", "1.0");
        if (optimize) {
            query = NAMESPACES + OPTIMIZE + query;
        } else {
            query = NAMESPACES + NO_OPTIMIZE + query;
        }
        ResourceSet result = service.query(query);
        assertEquals(message, expected, result.getSize());
    }

    @ClassRule
    public static final ExistEmbeddedServer existEmbeddedServer = new ExistEmbeddedServer(
            propertiesBuilder()
                    .put(FunctionFactory.PROPERTY_DISABLE_DEPRECATED_FUNCTIONS, Boolean.FALSE) //Since we use the deprecated text:match-all() function, we have to be sure is is enabled
                    .build(),
            true,
            true);

    @BeforeClass
    public static void initDatabase() throws ClassNotFoundException, IllegalAccessException, InstantiationException, XMLDBException, IOException, URISyntaxException {
        // initialize driver
        Class<?> cl = Class.forName("org.exist.xmldb.DatabaseImpl");
        Database database = (Database) cl.newInstance();
        database.setProperty("create-database", "true");
        DatabaseManager.registerDatabase(database);

        Collection root = DatabaseManager.getCollection(XmldbURI.LOCAL_DB, "admin", "");
        CollectionManagementService service =
                (CollectionManagementService) root.getService("CollectionManagementService", "1.0");
        testCollection = service.createCollection("test");
        Assert.assertNotNull(testCollection);

        IndexQueryService idxConf = (IndexQueryService) testCollection.getService("IndexQueryService", "1.0");
        idxConf.configureCollection(COLLECTION_CONFIG);

        XMLResource resource = (XMLResource) testCollection.createResource("test.xml", "XMLResource");
        resource.setContent(XML);
        testCollection.storeResource(resource);

        for (final String sampleName : SAMPLES.getShakespeareXmlSampleNames()) {
            resource = (XMLResource) testCollection.createResource(sampleName, XMLResource.RESOURCE_TYPE);
            try (final InputStream is = SAMPLES.getShakespeareSample(sampleName)) {
                resource.setContent(InputStreamUtil.readString(is, UTF_8));
            }
            testCollection.storeResource(resource);
        }
    }

    @AfterClass
    public static void cleanupDb() throws LockException, TriggerException, PermissionDeniedException, EXistException, IOException {
        TestUtils.cleanupDB();
	}
}
