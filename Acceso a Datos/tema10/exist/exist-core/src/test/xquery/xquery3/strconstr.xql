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

module namespace sc="http://exist-db.org/xquery/test/string-constructor";

declare namespace test="http://exist-db.org/xquery/xqsuite";

declare variable $sc:win := map {
      "name": "Chris",
      "value": 10000,
      "taxed_value": 10000 - (10000 * 0.4),
      "in_ca": true()
    };

declare
    %test:assertEquals("Hello world!")
function sc:simple() {
    ``[Hello world!]``
};

(:
 : Character entities are not expanded, chars like <> are allowed.
 :)
declare
    %test:assertEquals("Hello &amp;<world>{!}(:no comment:)")
function sc:special-chars() {
    ``[Hello &<world>{!}(:no comment:)]``
};

declare
    %test:assertEquals("Hello my world!")
function sc:simple-interpolation() {
    let $a := "my"
    return
        ``[Hello `{$a}` world!]``
};

declare
    %test:assertEquals('Hello "my" ''my'' world!')
function sc:simple-interpolation-quoted() {
    let $a := "my"
    return
        ``[Hello "`{$a}`" '`{$a}`' world!]``
};

declare
    %test:assertEquals("Hello my new world!")
function sc:simple-interpolation-sequence() {
    let $a := ("my", "new")
    return
        ``[Hello `{$a}` world!]``
};

declare
    %test:assertEquals("one fish", "two fish", "red fish", "blue fish")
function sc:simple-for() {
    for $s in ("one", "two", "red", "blue")
    return ``[`{$s}` fish]``
};


declare
    %test:assertEquals("1 literal text 2 more literal text")
function sc:nested() {
    let $i := 1
    let $j := 2
    return
        ``[`{ $i, ``[literal text]``, $j, ``[more literal text]`` }`]``
};

declare
    %test:assertEquals("Hello my world!")
function sc:path-interpolation() {
    let $a := <p><span>my</span></p>
    return
        ``[Hello `{$a/span}` world!]``
};

declare
    %test:assertEquals("I count 6!")
function sc:interpolation-funcall() {
    let $a := (1, 2, 3)
    return
        ``[I count `{sum($a)}`!]``
};

declare
    %test:assertXPath('count(tokenize($result, "\n")) eq 3')
function sc:newlines() {
``[Hello `{$sc:win?name}`
You have just won `{$sc:win?value}` dollars!
`{ 
   if ($sc:win?in_ca) 
   then ``[Well, `{$sc:win?taxed_value}` dollars, after taxes.]``
   else ""
}`]``
};