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

module namespace bang="http://exist-db.org/xquery/test/bang";

declare namespace test="http://exist-db.org/xquery/xqsuite";

declare variable $bang:works :=
    <works>
        <employee name="Jane Doe 1" gender="female">
            <empnum>E1</empnum>
            <pnum>P1</pnum>
            <hours>40</hours>
        </employee>
        <employee name = "John Doe 2" gender="male">
            <empnum>E1</empnum>
            <pnum>P2</pnum>
            <hours>70</hours>
            <hours>20</hours>Text data from Employee[2]
        </employee>
        <employee name = "Jane Doe 3" gender="female">
            <empnum>E1</empnum>
            <pnum>P3</pnum>
            <hours>80</hours>
        </employee>
        <employee name= "John Doe 4" gender="male">
            <empnum>E1</empnum>
            <pnum>P4</pnum>
            <hours>20</hours>
            <hours>40</hours>
        </employee>
    </works>;

declare
    %test:assertEquals(1, 4, 9, 16, 25, 36, 49, 64, 81, 100)
function bang:numbers1() {
    (1 to 10)!(.*.)
};

declare
    %test:assertEquals(3, 4, 5)
function bang:functions1() {
    ("red", "blue", "green")!string-length()
};

declare
    %test:assertEquals(4, 5, 6)
function bang:functions2() {
    ("red", "blue", "green") ! string-length() ! (.+1)
};

declare
    %test:assertEquals("RED", "BLUE", "GREEN")
function bang:functions3() {
    ("red", "blue", "green") ! upper-case(.)
};

declare
    %test:assertEquals("RED", "BLUE", "GREEN")
function bang:functions4() {
    ("red", "blue", "green") ! bang:upper-case(.)
};

declare %private function bang:upper-case($str as xs:string) {
    upper-case($str)
};

declare
    %test:assertEquals(1, 2, 3)
function bang:position1() {
    ("red", "blue", "green")!position()
};

declare
    %test:assertEquals("false", "false", "true")
function bang:position2() {
    ("red", "blue", "green")!(position() = last())
};

declare
    %test:assertEquals(1, 1, 2, 1, 2, 3)
function bang:position3() {
    (1 to 3) ! ((1 to .) ! position())
};

declare
    %test:assertEquals(3, 3, 3)
function bang:position4() {
    ("red", "blue", "green")!last()
};

declare
    %test:assertEquals("false", "false", "false", "true")
function bang:position5() {
    $bang:works/employee ! (position() = last())
};

declare
    %test:assertEquals("John Doe 2", "Jane Doe 1", "John Doe 2")
function bang:nodes1() {
    ($bang:works/employee[2], $bang:works/employee[1], $bang:works/employee[2]) ! @name ! string()
};

declare
    %test:assertEquals(20)
function bang:nodes2() {
    $bang:works ! employee[2] ! hours[2] ! number()
};

declare
    %test:assertEquals("-18")
function bang:precedence1() {
    2 + ($bang:works ! employee[2] ! hours[2]) ! number() ! (-.)
};

declare
    %test:assertEquals("-3")
function bang:precedence2() {
    -2!(.+1)
};

declare
    %test:assertEquals(1, 1, 2, 1, 2, 3)
function bang:sequence() {
    (1 to 3) ! (1 to .)
};

declare
    %test:assertEquals(4)
function bang:nodepath() {
    count($bang:works ! employee)
};

declare
    %test:assertEquals("John Doe 4")
function bang:nodepath-reverse() {
    $bang:works/employee/pnum[. = "P4"] ! ancestor::employee ! @name ! string()
};

declare
    %test:assertEquals("<name>John Doe 4</name>")
function bang:constructor() {
    $bang:works/employee[pnum = "P4"] ! <name>{@name/string()}</name>
};

declare
    %test:assertEquals("a", "b", "c")
function bang:implicit-context() {
    document { <a><b/><c/></a> } ! //* ! local-name(.)
};

declare
    %test:assertEquals(4)
function bang:right-string-length-context-item() {
    1234 ! string-length()
};

(:~
 : See: https://www.biglist.com/lists/lists.mulberrytech.com/xsl-list/archives/201906/msg00021.html
 : See: https://github.com/eXist-db/exist/issues/2798
 :)
declare
    %test:assertError("XPTY0004")
function bang:right-string-length() {
    1234 ! string-length(.)
};

declare
    %test:assertEquals(1)
function bang:attribute-left-number-context-item-right() {
    <emp id='1'/>/@id ! number()
};

declare
    %test:assertEquals(1)
function bang:attribute-left-number-right() {
    <emp id='1'/>/@id ! number(.)
};

declare
    %test:assertEquals(1)
function bang:element-left-number-attribute-right() {
    <emp id='1'/> ! number(@id)
};

declare
    %test:assertEquals(1,2,3)
function bang:map-get () {
    (map {'a':1}, map {'a':2}, map {'a':3}) ! map:get(., 'a')
};

declare
    %test:assertEquals(1,2,3)
function bang:array-get () {
    ([1], [2], [3]) ! array:get(., 1)
};

declare
     %test:assertEquals(1,2,3)
function bang:map-lookup-context-item () {
    (map {'a':1}, map {'a':2}, map {'a':3}) ! .?a
};

declare
     %test:assertEquals(1,2,3)
function bang:map-lookup-parenthesized () {
    (map {'a':1}, map {'a':2}, map {'a':3}) ! (.?a)
};

declare
     %test:assertEquals(1,2,3)
function bang:map-lookup-parenthesized-context-item () {
    (map {'a':1}, map {'a':2}, map {'a':3}) ! (.)?a
};

declare
    %test:assertEquals(1,2,3)
function bang:array-lookup-standard () {
    ([1], [2], [3]) ! .?1
};

declare
    %test:assertEquals(1,2,3)
function bang:array-lookup-parenthesized () {
    ([1], [2], [3]) ! (.?1)
};

declare
    %test:assertEquals(1,2,3)
function bang:array-lookup-parenthesized-context-item () {
    ([1], [2], [3]) ! (.)?1
};

declare
    %test:assertEquals(1,1,1,1,1)
function bang:mixed-function-types-call () {
    let $id := function ($a) { $a }
    return (function ($a) {1}, $id, sum#1, [1], map{1:1}) ! .(1)
};

declare
    %test:assertEquals(1,1,1,1,1)
function bang:mixed-function-types-call-parenthesized () {
    let $id := function ($a) { $a }
    return (function ($a) {1}, $id, sum#1, [1], map{1:1}) ! (.(1))
};

declare
    %test:assertEquals(1,1,1,1,1)
function bang:mixed-function-types-call-parenthesized-context-item () {
    let $id := function ($a) { $a }
    return (function ($a) {1}, $id, sum#1, [1], map{1:1}) ! (.)(1)
};

(: https://github.com/eXist-db/exist/issues/1655 :)
declare
    %test:assertEquals(1,2,3)
function bang:array-lookup-implicit-context () {
    ([1], [2], [3]) ! ?1
};

(: https://github.com/eXist-db/exist/issues/1655 :)
declare
    %test:assertEquals(1,2,3)
function bang:map-lookup-implicit-context () {
    (map {'a':1}, map {'a':2}, map {'a':3}) ! ?a
};

(: https://github.com/eXist-db/exist/issues/3491 :)
declare
    %test:assertEquals(3,4,5)
function bang:map-lookup-implicit-context-as-argument () {
    (map {'a': (1,2)}, map {'a': (2,2)}, map {'a':(2,3)}) ! sum(?a)
};

(: https://github.com/eXist-db/exist/issues/3491 :)
declare
    %test:assertEquals("1|2|3", "a|b|c")
function bang:array-to-sequence-as-parameter () {
    ([1,2,3], ['a', 'b', 'c'])
      ! string-join(?*, '|')
};
