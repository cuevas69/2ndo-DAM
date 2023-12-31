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
package org.exist.xquery.functions.xmldb;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import java.nio.file.Path;
import java.nio.file.Paths;

import org.apache.tools.ant.DirectoryScanner;
import org.exist.dom.QName;
import org.exist.util.FileUtils;
import org.exist.util.MimeTable;
import org.exist.util.MimeType;
import org.exist.xmldb.EXistResource;
import org.exist.xquery.Cardinality;
import org.exist.xquery.FunctionSignature;
import org.exist.xquery.XPathException;
import org.exist.xquery.XQueryContext;
import org.exist.xquery.value.FunctionReturnSequenceType;
import org.exist.xquery.value.FunctionParameterSequenceType;
import org.exist.xquery.value.Sequence;
import org.exist.xquery.value.SequenceType;
import org.exist.xquery.value.StringValue;
import org.exist.xquery.value.Type;
import org.exist.xquery.value.ValueSequence;
import org.xmldb.api.base.Collection;
import org.xmldb.api.base.Resource;
import org.xmldb.api.base.XMLDBException;

/**
 * @author wolf
 * @author Adam Retter
 */
public class XMLDBLoadFromPattern extends XMLDBAbstractCollectionManipulator {
    protected static final Logger logger = LogManager.getLogger(XMLDBLoadFromPattern.class);

    protected final static QName FUNCTION_NAME = new QName("store-files-from-pattern", XMLDBModule.NAMESPACE_URI, XMLDBModule.PREFIX);

    protected final static String FUNCTION_DESCRIPTION = "Stores new resources into the database. Resources are read from the server's " +
            "file system, using file patterns. " +
            "The function returns a sequence of all document paths added " +
            "to the db. These can be directly passed to fn:doc() to retrieve the document(s).";

    protected final static SequenceType PARAM_COLLECTION = new FunctionParameterSequenceType("collection-uri", Type.STRING, Cardinality.EXACTLY_ONE, "The collection-uri where resources should be stored. " + XMLDBModule.COLLECTION_URI);
    protected final static SequenceType PARAM_FS_DIRECTORY = new FunctionParameterSequenceType("directory", Type.STRING, Cardinality.EXACTLY_ONE, "The directory in the file system from where the files are read.");

    // fixit! - security - we should say some words about sanity   
    // DBA role should be required for anything short of chroot/jail
    // easily setup per installation/execution host for each function. /ljo

    protected final static SequenceType PARAM_FS_PATTERN = new FunctionParameterSequenceType("pattern", Type.STRING, Cardinality.ONE_OR_MORE, "The file matching pattern. Based on code from Apache's Ant, thus following the same conventions. For example: *.xml matches any file ending with .xml in the current directory, **/*.xml matches files in any directory below the current one");
    protected final static SequenceType PARAM_MIME_TYPE = new FunctionParameterSequenceType("mime-type", Type.STRING, Cardinality.ZERO_OR_ONE, "If the mime-type is something other than 'text/xml' or 'application/xml', the resource will be stored as a binary resource.");
    protected static final SequenceType PARAM_PRESERVE_STRUCTURE = new FunctionParameterSequenceType("preserve-structure", Type.BOOLEAN, Cardinality.EXACTLY_ONE, "If preserve-structure is true(), the filesystem directory structure will be mirrored in the collection. Otherwise all the matching resources, including the ones in sub-directories, will be stored in the collection given in the first argument flatly.");
    protected final static SequenceType PARAM_EXCLUDES = new FunctionParameterSequenceType("exclude", Type.STRING, Cardinality.ZERO_OR_MORE, "A sequence of file patterns to exclude");
    protected static final FunctionReturnSequenceType RETURN_TYPE = new FunctionReturnSequenceType(Type.STRING, Cardinality.ZERO_OR_MORE, "the sequence of document paths");


    public final static FunctionSignature[] signatures = {
            new FunctionSignature(
                    FUNCTION_NAME,
                    FUNCTION_DESCRIPTION,
                    new SequenceType[]{PARAM_COLLECTION, PARAM_FS_DIRECTORY, PARAM_FS_PATTERN},
                    RETURN_TYPE
            ),
            new FunctionSignature(
                    FUNCTION_NAME,
                    FUNCTION_DESCRIPTION,
                    new SequenceType[]{PARAM_COLLECTION, PARAM_FS_DIRECTORY, PARAM_FS_PATTERN, PARAM_MIME_TYPE},
                    RETURN_TYPE
            ),
            new FunctionSignature(
                    FUNCTION_NAME,
                    FUNCTION_DESCRIPTION,
                    new SequenceType[]{PARAM_COLLECTION, PARAM_FS_DIRECTORY, PARAM_FS_PATTERN, PARAM_MIME_TYPE, PARAM_PRESERVE_STRUCTURE},
                    RETURN_TYPE
            ),
            new FunctionSignature(
                    FUNCTION_NAME,
                    FUNCTION_DESCRIPTION,
                    new SequenceType[]{PARAM_COLLECTION, PARAM_FS_DIRECTORY, PARAM_FS_PATTERN, PARAM_MIME_TYPE, PARAM_PRESERVE_STRUCTURE, PARAM_EXCLUDES},
                    RETURN_TYPE
            )
    };

    public XMLDBLoadFromPattern(XQueryContext context, FunctionSignature signature) {
        super(context, signature);
    }

    @Override
    protected Sequence evalWithCollection(Collection collection, Sequence[] args, Sequence contextSequence)
            throws XPathException {
        final Path baseDir = Paths.get(args[1].getStringValue()).normalize();
        logger.debug("Loading files from directory: {}", baseDir.toAbsolutePath().toString());

        final Sequence patternsSeq = args[2];
        final int patternsLen = patternsSeq.getItemCount();
        final String[] includes = new String[patternsLen];
        for (int i = 0; i < patternsLen; i++) {
            includes[i] = patternsSeq.itemAt(0).getStringValue();
        }

        //determine resource type - xml or binary?
        MimeType mimeTypeFromArgs = null;
        if (getSignature().getArgumentCount() > 3 && args[3].hasOne()) {
            final String mimeTypeParam = args[3].getStringValue();
            mimeTypeFromArgs = MimeTable.getInstance().getContentType(mimeTypeParam);
            if (mimeTypeFromArgs == null) {
                throw new XPathException(this, "Unknown mime type specified: " + mimeTypeParam);
            }
        }

        //keep the directory structure?
        boolean keepDirStructure = false;
        if (getSignature().getArgumentCount() >= 5) {
            keepDirStructure = args[4].effectiveBooleanValue();
        }

        final String[] excludes;
        if (getSignature().getArgumentCount() == 6) {
            final Sequence excludesSeq = args[5];
            final int excludesLen = excludesSeq.getItemCount();
            excludes = new String[excludesLen];
            for (int i = 0; i < excludesLen; i++) {
                excludes[i] = excludesSeq.itemAt(i).getStringValue();
            }
        } else {
            excludes = null;
        }

        final ValueSequence stored = new ValueSequence();

        // scan for files
        final DirectoryScanner directoryScanner = new DirectoryScanner();
        directoryScanner.setIncludes(includes);
        directoryScanner.setExcludes(excludes);
        directoryScanner.setBasedir(baseDir.toFile());
        directoryScanner.setCaseSensitive(true);
        directoryScanner.scan();

        Collection col = collection;
        String relDir;
        String prevDir = null;

        // store according to each pattern
        for (final String includedFile : directoryScanner.getIncludedFiles()) {
            final Path file = baseDir.resolve(includedFile);
            try {
                if (logger.isDebugEnabled()) {
                    logger.debug(file.toAbsolutePath().toString());
                }

                String relPath = file.toString().substring(baseDir.toString().length());
                final int p = relPath.lastIndexOf(java.io.File.separatorChar);

                if (p >= 0) {
                    relDir = relPath.substring(0, p);
                    relDir = relDir.replace(java.io.File.separatorChar, '/');
                } else {
                    relDir = relPath;
                }

                if (keepDirStructure && (prevDir == null || (!relDir.equals(prevDir)))) {
                    col = createCollectionPath(collection, relDir);
                    prevDir = relDir;
                }

                MimeType mimeType = mimeTypeFromArgs;
                if (mimeType == null) {
                    mimeType = MimeTable.getInstance().getContentTypeFor(FileUtils.fileName(file));
                    if (mimeType == null) {
                        mimeType = MimeType.BINARY_TYPE;
                    }
                }

                //TODO  : these probably need to be encoded and checked for right mime type
                final Resource resource = col.createResource(FileUtils.fileName(file), mimeType.getXMLDBType());
                resource.setContent(file.toFile());

                ((EXistResource) resource).setMimeType(mimeType.getName());

                col.storeResource(resource);

                //TODO : use dedicated function in XmldbURI
                stored.add(new StringValue(this, col.getName() + "/" + resource.getId()));
            } catch (final XMLDBException e) {
                logger.error("Could not store file {}: {}", file.toAbsolutePath(), e.getMessage());
            }
        }

        return stored;
    }
}