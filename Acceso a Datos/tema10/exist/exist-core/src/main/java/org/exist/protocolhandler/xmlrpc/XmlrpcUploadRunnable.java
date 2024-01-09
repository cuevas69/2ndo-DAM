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

package org.exist.protocolhandler.xmlrpc;

import java.io.IOException;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.exist.protocolhandler.xmldb.XmldbURL;
import org.exist.storage.io.BlockingInputStream;

/**
 * Wrap XmlrpcUpload class into a runnable for XmlrpcOutputStream.
 *
 * @author Dannes Wessels
 */
public class XmlrpcUploadRunnable implements Runnable {

    private final static Logger logger = LogManager.getLogger(XmlrpcUploadRunnable.class);
    private final XmldbURL url;
    private final BlockingInputStream bis;

    public XmlrpcUploadRunnable(final XmldbURL url, final BlockingInputStream bis) {
        this.url = url;
        this.bis = bis;
    }

    /**
     * Start Thread.
     */
    @Override
    public void run() {
        Exception exception = null;
        try {
            final XmlrpcUpload uploader = new XmlrpcUpload();
            uploader.stream(url, bis);

        } catch (IOException ex) {
            logger.error(ex);
            exception = ex;

        } finally {
            bis.close(exception);
        }
    }
}
