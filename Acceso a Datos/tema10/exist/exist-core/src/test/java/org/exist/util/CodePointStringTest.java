/*
 * Copyright (c) 2014, Evolved Binary Ltd
 *
 * This file was originally ported from FusionDB to eXist-db by
 * Evolved Binary, for the benefit of the eXist-db Open Source community.
 * Only the ported code as it appears in this file, at the time that
 * it was contributed to eXist-db, was re-licensed under The BSD 3-Clause
 * License by Evolved Binary for use in eXist-db.
 *
 * This license grant applies only to a snapshot of the code as it
 * appeared when ported, it does not offer or infer any rights to either
 * updates of this source code or access to the original source code.
 *
 * The BSD 3-Clause license follows.
 *
 * ---------------------------------------------------------------------
 *
 * Copyright (c) 2014, Evolved Binary Ltd
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of Evolved Binary nor the names of its contributors
 *       may be used to endorse or promote products derived from this software
 *       without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
 * ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EVOLVED BINARY BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
package org.exist.util;

import org.junit.Test;

import static org.junit.Assert.*;

public class CodePointStringTest {

    /**
     * Equivalent to &#110000;
     */
    private final static String UNDEFINED_110000 = String.valueOf(Character.toChars(110000));

    /**
     * Equivalent to &#110001;
     */
    private final static String UNDEFINED_110001 = String.valueOf(Character.toChars(110001));

    @Test
    public void roundtrip() {
        String str = "abcdef";
        CodePointString cps = new CodePointString(str);
        assertEquals(6, cps.length());
        assertEquals(str, cps.toString());

        str = UNDEFINED_110000 + UNDEFINED_110001;
        cps = new CodePointString(str);
        assertEquals(2, cps.length());
        assertEquals(str, cps.toString());

        str = "a" + UNDEFINED_110001 + "a" + UNDEFINED_110000 + "a";
        cps = new CodePointString(str);
        assertEquals(5, cps.length());
        assertEquals(str, cps.toString());
    }

    @Test
    public void replaceFirst() {
        String str = "abc";
        CodePointString cps = new CodePointString(str);
        assertEquals("zbc", cps.replaceFirst('a', 'z').toString());
        cps = new CodePointString(str);
        assertEquals("azc", cps.replaceFirst('b', 'z').toString());
        cps = new CodePointString(str);
        assertEquals("abz", cps.replaceFirst('c', 'z').toString());

        str = "aac";
        cps = new CodePointString(str);
        assertEquals("zac", cps.replaceFirst('a', 'z').toString());
        cps = new CodePointString(str);
        assertEquals("aaz", cps.replaceFirst('c', 'z').toString());

        str = "acc";
        cps = new CodePointString(str);
        assertEquals("zcc", cps.replaceFirst('a', 'z').toString());
        cps = new CodePointString(str);
        assertEquals("azc", cps.replaceFirst('c', 'z').toString());

        str = "a" + UNDEFINED_110001 + "a" + UNDEFINED_110000 + "a";
        cps = new CodePointString(str);
        assertEquals("z" + UNDEFINED_110001 + "a" + UNDEFINED_110000 + "a", cps.replaceFirst('a', 'z').toString());

        cps = new CodePointString(str);
        assertEquals("aza" + UNDEFINED_110000 + "a", cps.replaceFirst(UNDEFINED_110001.codePointAt(0), 'z').toString());

        str = "a" + UNDEFINED_110001 + "z" + UNDEFINED_110001 + "a";
        cps = new CodePointString(str);
        assertEquals("azz" + UNDEFINED_110001 + "a", cps.replaceFirst(UNDEFINED_110001.codePointAt(0), 'z').toString());
    }

    @Test
    public void replaceAll() {
        String str = "abc";
        CodePointString cps = new CodePointString(str);
        assertEquals("zbc", cps.replaceAll('a', 'z').toString());
        cps = new CodePointString(str);
        assertEquals("azc", cps.replaceAll('b', 'z').toString());
        cps = new CodePointString(str);
        assertEquals("abz", cps.replaceAll('c', 'z').toString());

        str = "aac";
        cps = new CodePointString(str);
        assertEquals("zzc", cps.replaceAll('a', 'z').toString());
        cps = new CodePointString(str);
        assertEquals("aaz", cps.replaceAll('c', 'z').toString());

        str = "acc";
        cps = new CodePointString(str);
        assertEquals("zcc", cps.replaceAll('a', 'z').toString());
        cps = new CodePointString(str);
        assertEquals("azz", cps.replaceAll('c', 'z').toString());

        str = "aabbcc";
        cps = new CodePointString(str);
        assertEquals("zzbbcc", cps.replaceAll('a', 'z').toString());
        cps = new CodePointString(str);
        assertEquals("aazzcc", cps.replaceAll('b', 'z').toString());
        cps = new CodePointString(str);
        assertEquals("aabbzz", cps.replaceAll('c', 'z').toString());

        str = "ababcac";
        cps = new CodePointString(str);
        assertEquals("zbzbczc", cps.replaceAll('a', 'z').toString());
        cps = new CodePointString(str);
        assertEquals("azazcac", cps.replaceAll('b', 'z').toString());
        cps = new CodePointString(str);
        assertEquals("ababzaz", cps.replaceAll('c', 'z').toString());

        str = "a" + UNDEFINED_110001 + "a" + UNDEFINED_110000 + "a";
        cps = new CodePointString(str);
        assertEquals("z" + UNDEFINED_110001 + "z" + UNDEFINED_110000 + "z", cps.replaceAll('a', 'z').toString());

        cps = new CodePointString(str);
        assertEquals("aza" + UNDEFINED_110000 + "a", cps.replaceAll(UNDEFINED_110001.codePointAt(0), 'z').toString());

        str = "a" + UNDEFINED_110001 + "z" + UNDEFINED_110001 + "a";
        cps = new CodePointString(str);
        assertEquals("azzza", cps.replaceAll(UNDEFINED_110001.codePointAt(0), 'z').toString());

        str = "a" + UNDEFINED_110001 + "a" + UNDEFINED_110001 + "a";
        cps = new CodePointString(str);
        assertEquals("azaza", cps.replaceAll(UNDEFINED_110001.codePointAt(0), 'z').toString());

        str = UNDEFINED_110001 + UNDEFINED_110001 + "a";
        cps = new CodePointString(str);
        assertEquals("zza", cps.replaceAll(UNDEFINED_110001.codePointAt(0), 'z').toString());

        str = "a" + UNDEFINED_110001 + UNDEFINED_110001;
        cps = new CodePointString(str);
        assertEquals("azz", cps.replaceAll(UNDEFINED_110001.codePointAt(0), 'z').toString());

        str = "a" + UNDEFINED_110001 + UNDEFINED_110001 + "a";
        cps = new CodePointString(str);
        assertEquals("azza", cps.replaceAll(UNDEFINED_110001.codePointAt(0), 'z').toString());
    }

    @Test
    public void indexOf() {
        assertEquals(-1, new CodePointString().indexOf("a".codePointAt(0)));
        assertEquals(-1, new CodePointString().indexOf("z".codePointAt(0)));
        assertEquals(-1, new CodePointString("abcdefghijklmnopqrstuvwxy0123456789").indexOf("z".codePointAt(0)));

        assertEquals(0, new CodePointString("abcdefghijklmnopqrstuvwxyz0123456789").indexOf("a".codePointAt(0)));
        assertEquals(1, new CodePointString("abcdefghijklmnopqrstuvwxyz0123456789").indexOf("b".codePointAt(0)));
        assertEquals(25, new CodePointString("abcdefghijklmnopqrstuvwxyz0123456789").indexOf("z".codePointAt(0)));
        assertEquals(26, new CodePointString("abcdefghijklmnopqrstuvwxyz0123456789").indexOf("0".codePointAt(0)));
        assertEquals(34, new CodePointString("abcdefghijklmnopqrstuvwxyz0123456789").indexOf("8".codePointAt(0)));
        assertEquals(35, new CodePointString("abcdefghijklmnopqrstuvwxyz0123456789").indexOf("9".codePointAt(0)));
    }

    @Test
    public void append() {
        CodePointString cps = new CodePointString()
                .append("a".codePointAt(0));
        assertEquals(1, cps.length());
        assertEquals("a".codePointAt(0), cps.codePointAt(0));

        cps = new CodePointString()
                .append('a')
                .append('b')
                .append('c')
                .append('d')
                .append('e')
                .append('f');
        assertEquals(6, cps.length());
        assertEquals("abcdef", cps.toString());

        cps = cps
                .append(UNDEFINED_110000.codePointAt(0))
                .append(UNDEFINED_110001.codePointAt(0));
        assertEquals(8, cps.length());
        assertEquals("abcdef" + UNDEFINED_110000 + UNDEFINED_110001, cps.toString());

        cps = cps
                .append(UNDEFINED_110000.codePointAt(0))
                .append(UNDEFINED_110001.codePointAt(0));
        assertEquals(10, cps.length());
        assertEquals("abcdef" + UNDEFINED_110000 + UNDEFINED_110001 + UNDEFINED_110000 + UNDEFINED_110001, cps.toString());
    }

    @Test
    public void appendCodePointString() {
        CodePointString cps = new CodePointString()
                .append(new CodePointString("a"));
        assertEquals(1, cps.length());
        assertEquals("a".codePointAt(0), cps.codePointAt(0));

        cps = new CodePointString()
                .append(new CodePointString("abc"))
                .append(new CodePointString("def"));
        assertEquals(6, cps.length());
        assertEquals("abcdef", cps.toString());

        cps = cps
                .append(new CodePointString(UNDEFINED_110000))
                .append(new CodePointString(UNDEFINED_110001));
        assertEquals(8, cps.length());
        assertEquals("abcdef" + UNDEFINED_110000 + UNDEFINED_110001, cps.toString());

        cps = cps
                .append(new CodePointString(UNDEFINED_110000 + UNDEFINED_110001));
        assertEquals(10, cps.length());
        assertEquals("abcdef" + UNDEFINED_110000 + UNDEFINED_110001 + UNDEFINED_110000 + UNDEFINED_110001, cps.toString());
    }

    @Test
    public void ltrim() {
        CodePointString cps = new CodePointString("");
        cps = cps.leftTrim('0');
        assertEquals(0, cps.length());

        cps = new CodePointString("0001");
        cps = cps.leftTrim('0');
        assertEquals(1, cps.length());
        assertEquals("1", cps.toString());

        cps = new CodePointString("1000");
        cps = cps.leftTrim('0');
        assertEquals(4, cps.length());
        assertEquals("1000", cps.toString());

        cps = new CodePointString("0100");
        cps = cps.leftTrim('0');
        assertEquals(3, cps.length());
        assertEquals("100", cps.toString());

        cps = new CodePointString("0010");
        cps = cps.leftTrim('0');
        assertEquals(2, cps.length());
        assertEquals("10", cps.toString());

        cps = new CodePointString("0001");
        cps = cps.leftTrim('1');
        assertEquals(4, cps.length());
        assertEquals("0001", cps.toString());

        cps = new CodePointString("1000");
        cps = cps.leftTrim('1');
        assertEquals(3, cps.length());
        assertEquals("000", cps.toString());

        cps = new CodePointString("0100");
        cps = cps.leftTrim('1');
        assertEquals(4, cps.length());
        assertEquals("0100", cps.toString());

        cps = new CodePointString("0010");
        cps = cps.leftTrim('1');
        assertEquals(4, cps.length());
        assertEquals("0010", cps.toString());
    }

    @Test
    public void rtrim() {
        CodePointString cps = new CodePointString("");
        cps = cps.rightTrim('0');
        assertEquals(0, cps.length());

        cps = new CodePointString("0001");
        cps = cps.rightTrim('0');
        assertEquals(4, cps.length());
        assertEquals("0001", cps.toString());

        cps = new CodePointString("1000");
        cps = cps.rightTrim('0');
        assertEquals(1, cps.length());
        assertEquals("1", cps.toString());

        cps = new CodePointString("0100");
        cps = cps.rightTrim('0');
        assertEquals(2, cps.length());
        assertEquals("01", cps.toString());

        cps = new CodePointString("0010");
        cps = cps.rightTrim('0');
        assertEquals(3, cps.length());
        assertEquals("001", cps.toString());

        cps = new CodePointString("0001");
        cps = cps.rightTrim('1');
        assertEquals(3, cps.length());
        assertEquals("000", cps.toString());

        cps = new CodePointString("1000");
        cps = cps.rightTrim('1');
        assertEquals(4, cps.length());
        assertEquals("1000", cps.toString());

        cps = new CodePointString("0100");
        cps = cps.rightTrim('1');
        assertEquals(4, cps.length());
        assertEquals("0100", cps.toString());

        cps = new CodePointString("0010");
        cps = cps.rightTrim('1');
        assertEquals(4, cps.length());
        assertEquals("0010", cps.toString());
    }

    @Test
    public void transform() {
        CodePointString cps = new CodePointString("abcdef");
        cps = cps.transform('b', 'e', '0');
        assertEquals(6, cps.length());
        assertEquals("a0123f", cps.toString());

        cps = new CodePointString("012345");
        cps = cps.transform('1', '4', 'a');
        assertEquals(6, cps.length());
        assertEquals("0abcd5", cps.toString());

        cps = new CodePointString("abcdef");
        cps = cps.transform('c', 'e', 'a');
        assertEquals(6, cps.length());
        assertEquals("ababcf", cps.toString());

        final String undefined_110002 = String.valueOf(Character.toChars(UNDEFINED_110001.codePointAt(0) + 1));
        cps = new CodePointString("abcdef");
        cps = cps.transform('c', 'e', UNDEFINED_110000.codePointAt(0));
        assertEquals(6, cps.length());
        assertEquals("ab" + UNDEFINED_110000 + UNDEFINED_110001 + undefined_110002 + "f", cps.toString());
    }

    @Test
    public void leftPad() {
        CodePointString cps = new CodePointString();
        cps = cps.leftPad('a', 0);
        assertEquals(0, cps.length());

        cps = new CodePointString();
        cps = cps.leftPad('a', 6);
        assertEquals(6, cps.length());
        assertEquals("aaaaaa", cps.toString());

        cps = new CodePointString("123");
        cps = cps.leftPad('0', 0);
        assertEquals(3, cps.length());
        assertEquals("123", cps.toString());

        cps = new CodePointString("123");
        cps = cps.leftPad('0', 3);
        assertEquals(6, cps.length());
        assertEquals("000123", cps.toString());
    }

    @Test
    public void rightPad() {
        CodePointString cps = new CodePointString();
        cps = cps.rightPad('a', 0);
        assertEquals(0, cps.length());

        cps = new CodePointString();
        cps = cps.rightPad('a', 6);
        assertEquals(6, cps.length());
        assertEquals("aaaaaa", cps.toString());

        cps = new CodePointString("123");
        cps = cps.rightPad('0', 0);
        assertEquals(3, cps.length());
        assertEquals("123", cps.toString());

        cps = new CodePointString("123");
        cps = cps.rightPad('0', 3);
        assertEquals(6, cps.length());
        assertEquals("123000", cps.toString());
    }

    @Test
    public void insert() {
        CodePointString cps = new CodePointString();
        cps = cps.insert(0, 'a');
        assertEquals(1, cps.length());
        assertEquals("a", cps.toString());

        cps = new CodePointString("abc");
        cps = cps.insert(0, 'z');
        assertEquals(4, cps.length());
        assertEquals("zabc", cps.toString());
        cps = new CodePointString("abc");
        cps = cps.insert(3, 'z');
        assertEquals(4, cps.length());
        assertEquals("abcz", cps.toString());

        cps = new CodePointString("abc");
        cps = cps.insert(1, 'z');
        assertEquals(4, cps.length());
        assertEquals("azbc", cps.toString());
        cps = new CodePointString("abc");
        cps = cps.insert(2, 'z');
        assertEquals(4, cps.length());
        assertEquals("abzc", cps.toString());

        try {
            cps = new CodePointString("abc");
            cps = cps.insert(-1, 'z');
            fail("Expected IndexOutOfBoundsException as offset < 0");
        } catch (final IndexOutOfBoundsException e) {
            assertNotNull(e);
        }

        try {
            cps = new CodePointString("abc");
            cps = cps.insert(4, 'z');
            fail("Expected IndexOutOfBoundsException as offset > cps.length");
        } catch (final IndexOutOfBoundsException e) {
            assertNotNull(e);
        }
    }

    @Test
    public void insertMulti() {
        CodePointString cps = new CodePointString();
        cps = cps.insert(new int[0], 'a');
        assertEquals(0, cps.length());

        cps = new CodePointString();
        cps = cps.insert(new int[] {0}, 'a');
        assertEquals(1, cps.length());
        assertEquals("a", cps.toString());

        cps = new CodePointString("abc");
        cps = cps.insert(new int[] {0}, 'z');
        assertEquals(4, cps.length());
        assertEquals("zabc", cps.toString());
        cps = new CodePointString("abc");
        cps = cps.insert(new int[] {3}, 'z');
        assertEquals(4, cps.length());
        assertEquals("abcz", cps.toString());

        cps = new CodePointString("abc");
        cps = cps.insert(new int[] {1}, 'z');
        assertEquals(4, cps.length());
        assertEquals("azbc", cps.toString());
        cps = new CodePointString("abc");
        cps = cps.insert(new int[] {2}, 'z');
        assertEquals(4, cps.length());
        assertEquals("abzc", cps.toString());

        try {
            cps = new CodePointString("abc");
            cps = cps.insert(new int[] {-1}, 'z');
            fail("Expected IndexOutOfBoundsException as offset < 0");
        } catch (final IndexOutOfBoundsException e) {
            assertNotNull(e);
        }

        try {
            cps = new CodePointString("abc");
            cps = cps.insert(new int[] {2,-1,1}, 'z');
            fail("Expected IndexOutOfBoundsException as offset < 0");
        } catch (final IndexOutOfBoundsException e) {
            assertNotNull(e);
        }

        try {
            cps = new CodePointString("abc");
            cps = cps.insert(new int[] {4}, 'z');
            fail("Expected IndexOutOfBoundsException as offset > cps.length");
        } catch (final IndexOutOfBoundsException e) {
            assertNotNull(e);
        }

        try {
            cps = new CodePointString("abc");
            cps = cps.insert(new int[] {1,4,2}, 'z');
            fail("Expected IndexOutOfBoundsException as offset > cps.length");
        } catch (final IndexOutOfBoundsException e) {
            assertNotNull(e);
        }

        cps = new CodePointString("abc");
        cps = cps.insert(new int[] {0,1}, 'z');
        assertEquals(5, cps.length());
        assertEquals("zazbc", cps.toString());

        cps = new CodePointString("abc");
        cps = cps.insert(new int[] {0,1,2}, 'z');
        assertEquals(6, cps.length());
        assertEquals("zazbzc", cps.toString());

        cps = new CodePointString("abc");
        cps = cps.insert(new int[] {0,0}, 'z');
        assertEquals(5, cps.length());
        assertEquals("zzabc", cps.toString());
    }

    @Test
    public void removeFirst() {
        CodePointString cps = new CodePointString();
        cps = cps.removeFirst('0');
        assertEquals(0, cps.length());

        cps = new CodePointString("0");
        cps = cps.removeFirst('0');
        assertEquals(0, cps.length());

        cps = new CodePointString("abcdef");
        cps = cps.removeFirst('a');
        assertEquals(5, cps.length());
        assertEquals("bcdef", cps.toString());

        cps = new CodePointString("abcdef");
        cps = cps.removeFirst('f');
        assertEquals(5, cps.length());
        assertEquals("abcde", cps.toString());

        cps = new CodePointString("abcdef");
        cps = cps.removeFirst('c');
        assertEquals(5, cps.length());
        assertEquals("abdef", cps.toString());

        cps = new CodePointString("aaa");
        cps = cps.removeFirst('a');
        assertEquals(2, cps.length());
        assertEquals("aa", cps.toString());

        cps = new CodePointString("aaabbb");
        cps = cps.removeFirst('b');
        assertEquals(5, cps.length());
        assertEquals("aaabb", cps.toString());
    }
}