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

module namespace z="http://exist-db.org/testsuite/zips";

declare namespace util = "http://exist-db.org/xquery/util";

import module namespace test="http://exist-db.org/xquery/xqsuite" at "resource:org/exist/xquery/lib/xqsuite/xqsuite.xql";
import module namespace compression="http://exist-db.org/xquery/compression";


declare variable $z:collection-name := "unzip-test";
declare variable $z:collection := "/db/" || $z:collection-name;


declare variable $z:myFile-name := "!#$%()*+,-.:;=?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[]^_abcdefghijklmnopqrstuvwxyz{}~ ÇüéâäàåçêëèïîìÄÅÉæÆôöòûùÿÖÜ¢£¥₧ƒáíóúñÑªº¿αßΓπΣσµτΦΘΩδ∞φε.xml";
declare variable $z:myFile-serialized := "<file/>";

(: declare UTF8 encoded binary :)
declare variable $z:myStaticUTF8ContentBase64 := xs:base64Binary("UEsDBBQACAgIAOBYl0UAAAAAAAAAAAAAAADCAAAAISMkJSgpKissLS46Oz0/QEFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaW11eX2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6e31+IMOHw7zDqcOiw6TDoMOlw6fDqsOrw6jDr8Ouw6zDhMOFw4nDpsOGw7TDtsOyw7vDucO/w5bDnMKiwqPCpeKCp8aSw6HDrcOzw7rDscORwqrCusK/zrHDn86Tz4DOo8+DwrXPhM6mzpjOqc604oiez4bOtS54bWyzsa/IzVEoSy0qzszPs1Uy1DNQUkjNS85PycxLt1UKDXHTtVCyt+OyScvMSdW3AwBQSwcIwWbL3zAAAAAuAAAAUEsBAhQAFAAICAgA4FiXRcFmy98wAAAALgAAAMIAAAAAAAAAAAAAAAAAAAAAACEjJCUoKSorLC0uOjs9P0BBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWltdXl9hYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ent9fiDDh8O8w6nDosOkw6DDpcOnw6rDq8Oow6/DrsOsw4TDhcOJw6bDhsO0w7bDssO7w7nDv8OWw5zCosKjwqXigqfGksOhw63Ds8O6w7HDkcKqwrrCv86xw5/Ok8+AzqPPg8K1z4TOps6YzqnOtOKIns+GzrUueG1sUEsFBgAAAAABAAEA8AAAACABAAAAAA==");



(: Verify zero byte sized resource :)
declare
	%test:assertEquals("")
function z:zeroByteBinResource() {
    let $collection-uri :="/db/"
    let $resource-name :="empty.txt"
    let $contents :=""

    let $empty-file := xmldb:store-as-binary($collection-uri, $resource-name, $contents)

    let $zip := compression:zip(<entry type="uri" name="{$collection-uri}">{$collection-uri||$resource-name}</entry>, true())

    return util:binary-to-string(util:binary-doc($collection-uri||$resource-name))
};

