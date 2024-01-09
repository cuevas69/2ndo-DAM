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
package org.exist.xquery.modules.sort;

import org.exist.EXistException;
import org.exist.dom.QName;
import org.exist.dom.persistent.NodeProxy;
import org.exist.indexing.sort.SortIndex;
import org.exist.indexing.sort.SortIndexWorker;
import org.exist.util.LockException;
import org.exist.xquery.*;
import org.exist.xquery.value.*;

public class RemoveIndex extends BasicFunction {

    public final static FunctionSignature signatures[] = {
            new FunctionSignature(
                    new QName("remove-index", SortModule.NAMESPACE_URI, SortModule.PREFIX),
                    "Remove a sort index identified by its name.",
                    new SequenceType[]{
                            new FunctionParameterSequenceType("id", Type.STRING, Cardinality.EXACTLY_ONE,
                                    "The name of the index to be removed.")
                    },
                    new FunctionReturnSequenceType(Type.ITEM, Cardinality.ZERO_OR_MORE, "")),
            new FunctionSignature(
                    new QName("remove-index", SortModule.NAMESPACE_URI, SortModule.PREFIX),
                    "Remove all sort index entries for the given document.",
                    new SequenceType[]{
                            new FunctionParameterSequenceType("id", Type.STRING, Cardinality.EXACTLY_ONE,
                                    "The name of the index to be removed."),
                            new FunctionParameterSequenceType("document-node", Type.NODE, Cardinality.EXACTLY_ONE,
                                    "A node from the document for which entries should be removed.")
                    },
                    new FunctionReturnSequenceType(Type.ITEM, Cardinality.ZERO_OR_MORE, "")),
    };

    public RemoveIndex(final XQueryContext context, final FunctionSignature signature) {
        super(context, signature);
    }

    @Override
    public Sequence eval(final Sequence[] args, final Sequence contextSequence) throws XPathException {
        final SortIndexWorker index = (SortIndexWorker)
                context.getBroker().getIndexController().getWorkerByIndexId(SortIndex.ID);
        final String id = args[0].getStringValue();
        try {
            if (getArgumentCount() == 2) {
                final NodeValue nv = (NodeValue) args[1].itemAt(0);
                if (nv.getImplementationType() == NodeValue.IN_MEMORY_NODE)
                    throw new XPathException(this, "Second argument to remove should be a persistent node, not " +
                            "an in-memory node.");
                final NodeProxy proxy = (NodeProxy) nv;
                index.remove(id, proxy.getOwnerDocument());
            } else {
                index.remove(id);
            }
        } catch (final EXistException e) {
            throw new XPathException(this, e.getMessage(), e);
        } catch (final LockException e) {
            throw new XPathException(this, "Caught lock error while removing index. Giving up.", e);
        }

        return Sequence.EMPTY_SEQUENCE;
    }
}
