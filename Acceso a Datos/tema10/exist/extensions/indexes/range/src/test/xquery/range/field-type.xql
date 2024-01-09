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
xquery version "3.1";

module namespace rt="http://exist-db.org/xquery/range/combined-range-function-signature/test";

declare namespace test="http://exist-db.org/xquery/xqsuite";

declare variable $rt:COLLECTION_CONFIG := 
    <collection xmlns="http://exist-db.org/collection-config/1.0">
        <index xmlns:xs="http://www.w3.org/2001/XMLSchema">
            <range>
                <create match="//note">
                    <field name="note-type" match="@type" type="xs:string"/>
                </create>
            </range>
        </index>
    </collection>;

declare variable $rt:DATA :=
    <root>
        <div>
            <head>Telegram 294530 From the Department of State to the Consulate in Montreal<note
                    type="source">Source: National Archives, RG 59, Central Files 1967-69, POL 27
                    ARAB-ISR. Unclassified. Drafted by Loy (E/TT), cleared by Roger P. Davies (NEA) and
                    Styles (E/OA/AVP), and approved by Rusk.</note>
                <note type="summary">A message from Deputy Assistant Secretary of State Loy to IATA
                    Director-General Knut Hammarskjold expressing U.S. concern about recent hijackings.
                    Loy condemned Israel for the attack on Khaldeh Airport in Lebanon and noted that the
                    U.S. had registered disapproval of the Athens hijacking of an El Al aircraft.</note>
            </head>
        </div>
    </root>;

declare variable $rt:INDEXED_COLLECTION_NAME := "test-indexed";
declare variable $rt:INDEXED_COLLECTION := "/db/" || $rt:INDEXED_COLLECTION_NAME;

declare variable $rt:NON_INDEXED_COLLECTION_NAME := "test-non-indexed";
declare variable $rt:NON_INDEXED_COLLECTION := "/db/" || $rt:NON_INDEXED_COLLECTION_NAME;

declare
    %test:setUp
function rt:setup() {
    xmldb:create-collection("/db/system/config/db", $rt:INDEXED_COLLECTION_NAME),
    xmldb:store("/db/system/config/db/" || $rt:INDEXED_COLLECTION_NAME, "collection.xconf", $rt:COLLECTION_CONFIG),
    xmldb:create-collection("/db", $rt:INDEXED_COLLECTION_NAME),
    xmldb:store($rt:INDEXED_COLLECTION, "test.xml", $rt:DATA),
    xmldb:create-collection("/db", $rt:NON_INDEXED_COLLECTION_NAME),
    xmldb:store($rt:NON_INDEXED_COLLECTION, "test.xml", $rt:DATA)
};

declare
    %test:tearDown
function rt:cleanup() {
    xmldb:remove($rt:INDEXED_COLLECTION),
    xmldb:remove("/db/system/config/db/" || $rt:INDEXED_COLLECTION_NAME),
    xmldb:remove($rt:NON_INDEXED_COLLECTION)
};

declare function rt:get-note($div as element(div)) as element(note)  {
    $div//note[@type='summary']
};

(:~
 : Check indexed collection. This query should return one element. 
 :)
declare
    %test:assertXPath('/@type = "summary"')
function rt:test-indexed-collection() {
    rt:get-note(collection($rt:INDEXED_COLLECTION)//div)
};

(:~
 : Check non-indexed collection. This query should return one element. 
 :)
declare
    %test:assertXPath('/@type = "summary"')
function rt:test-non-indexed-collection() {
    rt:get-note(collection($rt:NON_INDEXED_COLLECTION)//div)
};