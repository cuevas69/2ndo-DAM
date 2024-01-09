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

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.exist.util.FileUtils;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;


public class BackupDirectory {
    public final static Logger LOG = LogManager.getLogger(BackupDirectory.class);


    public final static String PREFIX_FULL_BACKUP_FILE = "full";
    public final static String PREFIX_INC_BACKUP_FILE = "inc";

    public final static String FILE_REGEX = "(" + PREFIX_FULL_BACKUP_FILE + "|" + PREFIX_INC_BACKUP_FILE + ")(\\d{8}-\\d{4}).*";

    public final static String DATE_FORMAT_PICTURE = "yyyyMMdd-HHmm";
    private final DateFormat dateFormat = new SimpleDateFormat(DATE_FORMAT_PICTURE);


    private final Path dir;

    private final Matcher matcher;

    public BackupDirectory(final String dirPath) {
        this(Paths.get(dirPath));
    }


    public BackupDirectory(final Path directory) {
        this.dir = directory;
        final Pattern pattern = Pattern.compile(FILE_REGEX);
        matcher = pattern.matcher("");
    }

    public Path createBackup(final boolean incremental, final boolean zip) {
        int counter = 0;
        while (true) {
            final StringBuilder buf = new StringBuilder();
            buf.append(incremental ? PREFIX_INC_BACKUP_FILE : PREFIX_FULL_BACKUP_FILE);
            buf.append(dateFormat.format(new Date()));

            if (counter++ > 0) {
                buf.append('_').append(counter);
            }

            // make sure a file/dir of the same basic name (i.e. without extension) does not exist
            Path file = dir.resolve(buf.toString());
            if (!Files.exists(file)) {

                // is this a zip backup file?
                if (!zip) {
                    // no
                    return file;

                } else {
                    // yes, so check that a file/dir of the same name as the desired zip file does not exist
                    buf.append(".zip");
                    file = dir.resolve(buf.toString());
                    if (!Files.exists(file)) {
                        return file;
                    }
                }
            }
        }
    }


    public BackupDescriptor lastBackupFile() throws IOException {
        final List<Path> files = FileUtils.list(dir);

        Path newest = null;
        Date newestDate = null;

        for (final Path file : files) {
            matcher.reset(FileUtils.fileName(file));

            if (matcher.matches()) {
                final String dateTime = matcher.group(2);

                try {
                    final Date date = dateFormat.parse(dateTime);

                    if ((newestDate == null) || date.after(newestDate)) {
                        newestDate = date;
                        newest = file;
                    }
                } catch (final ParseException e) {
                }
            }
        }
        BackupDescriptor descriptor = null;

        if (newest != null) {

            try {

                if (FileUtils.fileName(newest).toLowerCase().endsWith(".zip")) {
                    descriptor = new ZipArchiveBackupDescriptor(newest);
                } else {
                    descriptor = new FileSystemBackupDescriptor(newest, newest.resolve("db").resolve(BackupDescriptor.COLLECTION_DESCRIPTOR));
                }
            } catch (final IOException e) {
                e.printStackTrace();
            }
        }
        return (descriptor);
    }

}
