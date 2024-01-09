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
package org.exist.backup;

import java.io.File;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;


public class BackupFile {
    private final File file;
    private Date date;

    private final DateFormat dateFormat = new SimpleDateFormat(BackupDirectory.DATE_FORMAT_PICTURE);

    public BackupFile(final File file, final String dateTime) {
        this.file = file;

        try {
            date = dateFormat.parse(dateTime);
        } catch (final ParseException e) {
            // NOP
        }
    }

    public boolean after(final BackupFile other) {
        return (date.after(other.date));
    }


    public boolean after(final long time) {
        return (date.getTime() > time);
    }


    public boolean before(final BackupFile other) {
        return (date.before(other.date));
    }


    public boolean before(final long time) {
        return (time > date.getTime());
    }


    public File getFile() {
        return (file);
    }


    public Date getDate() {
        return (date);
    }
}
