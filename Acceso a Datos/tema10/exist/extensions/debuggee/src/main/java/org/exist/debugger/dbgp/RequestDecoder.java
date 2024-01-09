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
package org.exist.debugger.dbgp;

import org.apache.mina.core.buffer.IoBuffer;
import org.apache.mina.core.session.IoSession;
import org.apache.mina.filter.codec.CumulativeProtocolDecoder;
import org.apache.mina.filter.codec.ProtocolDecoderOutput;

/**
 * @author <a href="mailto:shabanovd@gmail.com">Dmitriy Shabanov</a>
 *
 */
public class RequestDecoder extends CumulativeProtocolDecoder {

	private String sLength = "";
	private Integer length = null;
	
	@Override
	protected boolean doDecode(IoSession session, IoBuffer in,
			ProtocolDecoderOutput out) throws Exception {
		
		byte b;
		while (true) {
			//TODO: limit length to avoid "OutOfMemory"
			if (length == null) {
				if (in.remaining() > 0) {
					b = in.get();
					if (b == (byte)0) {
						try {
							length = Integer.valueOf(sLength);
						} catch (java.lang.NumberFormatException e) {
							length = null;
							sLength = "";
						}
						continue;
					}
					sLength += (char)b; 
				} else {
					return false;
				}
			} else if (in.remaining() >= length) {
				ResponseImpl response = new ResponseImpl(session, 
						in.getSlice(length).asInputStream());
				
				if (response.isValid())
					response.getDebugger().addResponse(response);
				
				length = null;
				sLength = "";

				return true;
			} else {
				return false;
			}
		}
	}
}
