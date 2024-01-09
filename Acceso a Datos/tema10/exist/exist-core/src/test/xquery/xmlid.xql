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

(:~ Additional tests for the fn:count function :)
module namespace xid="http://exist-db.org/xquery/test/xmlid";

declare namespace test="http://exist-db.org/xquery/xqsuite";
declare namespace tei="http://www.tei-c.org/ns/1.0";

declare variable $xid:COLLECTION_NAME := "test-xmlid";

declare variable $xid:XML :=
    ``[<test>
        <item xml:id="nym_Ͷαναξιμοῦς"/>
        <item xml:id="123"/>
    </test>]``;

declare variable $xid:XML2 :=
    ``[<seg xmlns:tei="http://www.tei-c.org/ns/1.0">
           <w xmlns="http://www.tei-c.org/ns/1.0" lemma="hippocratis" pos="fw-la" rendition="#hi" xml:id="A01622-005-a-05590">Hippocratis</w>
           <w xmlns="http://www.tei-c.org/ns/1.0" lemma="&amp;" pos="cc" xml:id="A01622-005-a-05600">&amp;</w>
           <w xmlns="http://www.tei-c.org/ns/1.0" lemma="galeni" pos="fw-la" rendition="#hi" xml:id="A01622-005-a-05610">Galeni</w>
           <w xmlns="http://www.tei-c.org/ns/1.0" lemma="praeceptis" pos="fw-la" xml:id="A01622-005-a-05620">praeceptis</w>
           <pc xmlns="http://www.tei-c.org/ns/1.0" xml:id="A01622-005-a-05630">,</pc>
       </seg>]``;

declare
%test:setUp
function xid:setup() {
    xmldb:create-collection("/db", $xid:COLLECTION_NAME),
    xmldb:store($xid:COLLECTION_NAME, "tei.xml", $xid:XML2)
};

declare
%test:tearDown
function xid:cleanup() {
    xmldb:remove($xid:COLLECTION_NAME)
};

declare
    %test:assertEquals("<item xml:id='nym_Ͷαναξιμοῦς'/>")
function xid:stored-xml() {
    xmldb:store($xid:COLLECTION_NAME, "test.xml", $xid:XML)[2],
    doc($xid:COLLECTION_NAME || "/test.xml")/id("nym_Ͷαναξιμοῦς"),
    (: not a valid ncname and thus ignored, c.f. https://www.w3.org/TR/xpath-functions-31/#func-id :)
    doc($xid:COLLECTION_NAME || "/test.xml")/id("123")
};

declare
%test:assertEquals("<item xml:id='nym_Ͷαναξιμοῦς'/>")
function xid:parse-xml() {
    let $test := fn:parse-xml($xid:XML)
    return (
        $test/id("nym_Ͷαναξιμοῦς"),
        (: not a valid ncname and thus ignored, c.f. https://www.w3.org/TR/xpath-functions-31/#func-id :)
        $test/id("123")
    )

};

declare
    %test:assertEquals("<item xml:id='nym_Ͷαναξιμοῦς'/>")
function xid:constructed-xml() {
    let $test :=
        <test>
            <item xml:id="nym_Ͷαναξιμοῦς"/>
        </test>
    return (
        $test/id("nym_Ͷαναξιμοῦς"),
        (: not a valid ncname and thus ignored, c.f. https://www.w3.org/TR/xpath-functions-31/#func-id :)
        $test/id("123")
    )
};

declare
%test:assertEquals("<item xml:id='nym_Ͷαναξιμοῦς'/>")
function xid:constructed-attribute() {
    let $test :=
        <test>
            <item>
                { attribute xml:id { "nym_Ͷαναξιμοῦς"} }
            </item>
        </test>
    return (
        $test/id("nym_Ͷαναξιμοῦς")
    )
};

declare
    %test:assertEquals(1)
function xid:enclosed-expression() {
    let $xml := <test>{doc($xid:COLLECTION_NAME || "/tei.xml")//tei:w}</test>
    return
    	count($xml/id("A01622-005-a-05590"))
};