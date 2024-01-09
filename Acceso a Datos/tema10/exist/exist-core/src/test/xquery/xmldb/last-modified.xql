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

module namespace t="http://exist-db.org/testsuite/last-modified";

import module namespace test="http://exist-db.org/xquery/xqsuite" at "resource:org/exist/xquery/lib/xqsuite/xqsuite.xql";

declare variable $t:collection-name := "last-modified-test/";
declare variable $t:collection := "/db/" || $t:collection-name;

declare variable $t:DATA1 := <test>1</test>;
declare variable $t:DATA2 := <test>2</test>;
declare variable $t:DATA3 := <test>3</test>;
declare variable $t:DATA4 := <test>4</test>;

declare
    %test:setUp
function t:setup() {
    xmldb:create-collection("/db", $t:collection-name),
    xmldb:store($t:collection, "first.xml", $t:DATA1),
    util:wait(500),
    xmldb:store($t:collection, "second.xml", $t:DATA2),
    util:wait(500),
    xmldb:store($t:collection, "third.xml", $t:DATA3),
    xmldb:store($t:collection, "dates.xml", <dates>
        <firstDate>{xmldb:last-modified($t:collection, "first.xml")}</firstDate>
        <secondDate>{xmldb:last-modified($t:collection, "second.xml")}</secondDate>
        <thirdDate>{xmldb:last-modified($t:collection, "third.xml")}</thirdDate>
        <fourthDate>{xmldb:last-modified($t:collection, "fourth.xml")}</fourthDate>
    </dates>)
};

declare
    %test:tearDown
function t:cleanup() {
    xmldb:remove($t:collection)
};

declare
    %test:assertEquals("2", "3")
function t:last-modified-since() {
    let $from := doc($t:collection  || "dates.xml")//firstDate
    return
        fn:sort(xmldb:find-last-modified-since(collection($t:collection)//test, $from) ! string(.))
};

declare
    %test:assertEquals("1", "2")
function t:last-modified-until() {
    let $until := doc($t:collection  || "dates.xml")//secondDate
    return
        fn:sort(xmldb:find-last-modified-until(collection($t:collection)//test, $until) ! string (.))
};
