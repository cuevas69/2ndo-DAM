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
package org.exist.numbering;

import java.io.IOException;

import org.exist.storage.io.VariableByteInput;
import org.exist.storage.io.VariableByteOutputStream;

/**
 * Implementation of {@link NodeIdFactory} for DLN-based
 * node ids.
 */
public class DLNFactory implements NodeIdFactory {

    public NodeId createInstance() {
        return new DLN();
    }

    public NodeId createInstance(final int id) {
        return new DLN(id);
    }
    
    public NodeId createFromStream(final VariableByteInput is) throws IOException {
        final short bitCnt = is.readShort();
        return bitCnt == 0 ? NodeId.END_OF_DOCUMENT : new DLN(bitCnt, is);
    }

    public NodeId createFromStream(final NodeId previous, final VariableByteInput is) throws IOException {
        //if (previous == null)
        //  return createFromStream(is);
        final byte prefix = is.readByte();
        if (prefix == 0)
            {return createFromStream(is);}
        final short bitCnt = is.readShort();
        return bitCnt == 0 ? NodeId.END_OF_DOCUMENT : new DLN(prefix, (DLN) previous, bitCnt, is);
    }

    public NodeId createFromData(final int sizeHint, final byte[] data, final int startOffset) {
        return new DLN(sizeHint, data, startOffset);
    }

    public NodeId createFromString(final String string) {
    	return new DLN(string);
    }

    public NodeId documentNodeId() {
        return NodeId.DOCUMENT_NODE;
    }

    public int lengthInBytes(final int units, final byte[] data, final int startOffset) {
        return DLNBase.getLengthInBytes(units, data, startOffset);
    }

    public void writeEndOfDocument(final VariableByteOutputStream os) {
        os.writeByte((byte) 0);
        os.writeShort(0);
    }
}
