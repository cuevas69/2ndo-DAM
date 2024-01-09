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
package org.exist.storage;

import org.junit.Test;

import static org.junit.Assert.*;

public class NodePathTest {

    @Test
    public void basicPaths() {
        NodePath path = new NodePath(null, "/a/b/c", false);

        assertFalse(path.match(new NodePath(null, "/a/b")));
        assertTrue(path.match(new NodePath(null, "/a/b/c")));
        assertFalse(path.match(new NodePath(null, "/a/b/c/d")));

        path = new NodePath(null, "/a/b/c", true);

        assertFalse(path.match(new NodePath(null, "/a/b")));
        assertTrue(path.match(new NodePath(null, "/a/b/c")));
        assertTrue(path.match(new NodePath(null, "/a/b/c/d")));
        assertTrue(path.match(new NodePath(null, "/a/b/c/d/e")));

        path = new NodePath(null, "/a/a/b");
        assertTrue(path.match(new NodePath(null, "/a/a/b")));
        assertFalse(path.match(new NodePath(null, "/a/b/c")));

        path = new NodePath(null, "/a/b/c/c");
        assertTrue(path.match(new NodePath(null, "/a/b/c/c")));
        assertFalse(path.match(new NodePath(null, "/a/b/c/d")));
    }

    @Test
    public void wildcards() {
        NodePath path = new NodePath(null, "/a//c", false);

        assertTrue(path.match(new NodePath(null, "/a/b/c")));
        assertFalse(path.match(new NodePath(null, "/a/b")));
        assertFalse(path.match(new NodePath(null, "/a/b/c/d")));
        assertTrue(path.match(new NodePath(null, "/a/c")));

        path = new NodePath(null, "//c");
        assertTrue(path.match(new NodePath(null, "/a/b/c")));
        assertTrue(path.match(new NodePath(null, "/a/b/c/c/c")));
        assertFalse(path.match(new NodePath(null, "/a/b/b")));

        path = new NodePath(null, "/a/b/*", true);
        assertTrue(path.match(new NodePath(null, "/a/b/c")));
        assertTrue(path.match(new NodePath(null, "/a/b/c/d")));
        assertFalse(path.match(new NodePath(null, "/a/b")));

        path = new NodePath(null, "/a/b/*", false);
        assertTrue(path.match(new NodePath(null, "/a/b/c")));
        assertFalse(path.match(new NodePath(null, "/a/b/c/d")));

        path = new NodePath(null, "/a/b//*", true);
        assertTrue(path.match(new NodePath(null, "/a/b/c")));
        assertTrue(path.match(new NodePath(null, "/a/b/c/d")));

        path = new NodePath(null, "//c/d");
        assertTrue(path.match(new NodePath(null, "/a/b/c/c/d")));
    }

    @Test
    public void appendFromEmpty() {
        NodePath path = new NodePath();
        path.append(new NodePath(null, "/a/b/c/d"));
        assertEquals("/a/b/c/d", path.toString());
        path.append(new NodePath(null, "/1/2/3"));
        assertEquals("/a/b/c/d/1/2/3", path.toString());
    }

    @Test
    public void appendFromNonEmpty() {
        NodePath path = new NodePath(null, "/a");
        assertEquals("/a", path.toString());
        path.append(new NodePath(null, "/1/2/3"));
        assertEquals("/a/1/2/3", path.toString());

        path = new NodePath(null, "/a");
        assertEquals("/a", path.toString());
        path.append(new NodePath(null, "/1/2/3/4/5/6"));
        assertEquals("/a/1/2/3/4/5/6", path.toString());

        path = new NodePath(null, "/a/b/c/d");
        assertEquals("/a/b/c/d", path.toString());
        path.append(new NodePath(null, "/1/2/3"));
        assertEquals("/a/b/c/d/1/2/3", path.toString());
    }


}
