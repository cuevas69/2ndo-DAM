(:
 : eXist-db Open Source Native XML Database
 : Copyright (C) 2001 The eXist-db Authors
 :
 : info@exist-db.org
 : http://www.exist-db.org
 :
 : This library is free software; you can redistribute it and/or
 : modify it under the terms of the GNU Lesser General Public
 : License as published by the Free Software Foundation; either
 : version 2.1 of the License, or (at your option) any later version.
 :
 : This library is distributed in the hope that it will be useful,
 : but WITHOUT ANY WARRANTY; without even the implied warranty of
 : MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 : Lesser General Public License for more details.
 :
 : You should have received a copy of the GNU Lesser General Public
 : License along with this library; if not, write to the Free Software
 : Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301  USA
 :)
xquery version "3.0";

module namespace excepttest="http://exist-db.org/xquery/test/except";
import module namespace test="http://exist-db.org/xquery/xqsuite" at "resource:org/exist/xquery/lib/xqsuite/xqsuite.xql";
declare namespace tei="http://www.tei-c.org/ns/1.0";

declare variable $excepttest:DATA :=
    <TEI xmlns="http://www.tei-c.org/ns/1.0" xml:id="sha-mac">
        <text>
            <body>
                <div xml:id="sha-mac1">
                    <head>Act 1</head>
                </div>
            </body>
        </text>
    </TEI>;
    
declare variable $excepttest:DATA2 :=
    <TEI xmlns="http://www.tei-c.org/ns/1.0" xml:id="sha-mac">
        <text>
            <body>
                <div xml:id="sha-mac11">
                    <head>Act 12</head>
                </div>
            </body>
        </text>
    </TEI>;

declare variable $excepttest:COLLECTION_NAME := "/exceptTest";
declare variable $excepttest:SUBCOL1_NAME := $excepttest:COLLECTION_NAME||"/col1";
declare variable $excepttest:SUBCOL2_NAME := $excepttest:COLLECTION_NAME||"/col2";

declare variable $excepttest:COLLECTION := collection("/db"||$excepttest:COLLECTION_NAME);
declare variable $excepttest:SUBCOL1 := collection("/db"||$excepttest:SUBCOL1_NAME);
declare variable $excepttest:SUBCOL2 := collection("/db"||$excepttest:SUBCOL2_NAME);


declare
%test:setUp
function excepttest:setup() {

    xmldb:create-collection("/db", $excepttest:COLLECTION_NAME),
    xmldb:create-collection("/db", $excepttest:SUBCOL1_NAME),
    xmldb:create-collection("/db", $excepttest:SUBCOL2_NAME),
    xmldb:store("/db"||$excepttest:SUBCOL1_NAME, "test.xml", $excepttest:DATA),
    xmldb:store("/db"||$excepttest:SUBCOL2_NAME, "test2.xml", $excepttest:DATA2)
};

declare
    %test:tearDown
function excepttest:cleanup() {
    xmldb:remove($excepttest:COLLECTION_NAME)
};


declare
    %test:pending("https://github.com/eXist-db/exist/issues/1348")
    %test:assertEquals("Act 1")
function excepttest:except-wildcard() {
    ($excepttest:COLLECTION/* except $excepttest:SUBCOL2/*)//tei:head/text()
};

declare
    %test:assertEquals("Act 1")
function excepttest:except-node-name() {
    ($excepttest:COLLECTION/tei:TEI except $excepttest:SUBCOL2/tei:TEI)//tei:head/text()
};
