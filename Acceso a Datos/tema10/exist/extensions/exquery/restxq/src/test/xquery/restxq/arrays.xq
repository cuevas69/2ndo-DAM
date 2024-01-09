(:
 : Copyright © 2001, Adam Retter
 : All rights reserved.
 :
 : Redistribution and use in source and binary forms, with or without
 : modification, are permitted provided that the following conditions are met:
 :     * Redistributions of source code must retain the above copyright
 :       notice, this list of conditions and the following disclaimer.
 :     * Redistributions in binary form must reproduce the above copyright
 :       notice, this list of conditions and the following disclaimer in the
 :       documentation and/or other materials provided with the distribution.
 :     * Neither the name of the <organization> nor the
 :       names of its contributors may be used to endorse or promote products
 :       derived from this software without specific prior written permission.
 :
 : THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 : ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 : WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 : DISCLAIMED. IN NO EVENT SHALL <COPYRIGHT HOLDER> BE LIABLE FOR ANY
 : DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 : (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 : LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 : ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 : (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 : SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 :)
xquery version "3.1";

(:~
 : Tests for the RESTXQ serialization of array datatype.
 :)
module namespace arr="http://exist-db.org/test/restxq/arrays";

declare namespace test="http://exist-db.org/xquery/xqsuite";
declare namespace http="http://expath.org/ns/http-client";

declare variable $arr:COLLECTION_CONF :=
    <collection xmlns="http://exist-db.org/collection-config/1.0">
        <triggers>
            <trigger class="org.exist.extensions.exquery.restxq.impl.RestXqTrigger"/>
        </triggers>
    </collection>;

declare variable $arr:RESTXQ_TEST :=
    'xquery version "3.1";

     module namespace rt="http://exist-db.org/restxq/rt";

     declare namespace rest="http://exquery.org/ns/restxq";
     declare namespace output="http://www.w3.org/2010/xslt-xquery-serialization";

     declare
         %rest:GET
         %rest:path("/arrays-test")
         %output:method("json")
         %rest:produces("application/json")
     function rt:json-test() {
         map {
             "status": "ok",
             "counters": array { 1 to 10 }
         }
     };';

declare
    %test:setUp
function arr:setup() {
    let $coll := xmldb:create-collection("/db", "array-test")
    let $confColl := xmldb:create-collection("/db/system/config/db", "array-test")
    return (
        xmldb:store($confColl, "collection.xconf", $arr:COLLECTION_CONF),
        xmldb:store($coll, "test.xql", $arr:RESTXQ_TEST),
        sm:chmod(xs:anyURI($coll || "/test.xql"), "r-xr-xr-x")
    )
};

declare
    %test:tearDown
function arr:cleanup() {
    xmldb:remove("/db/array-test"),
    xmldb:remove("/db/system/config/db/array-test")
};

declare
    %test:pending("Requires a running server")
    %test:assertEquals("ok")
function arr:restxq-serialize() {
    let $req :=
        <http:request href="http://localhost:8080/exist/restxq/arrays-test" method="get">
            <http:header name="Accept" value="application/json"/>
        </http:request>
    return

        let $json := parse-json(util:binary-to-string(http:send-request($req)[2]))
        return
            $json?status
};
