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
package org.exist.xquery.functions.fn;

import org.exist.dom.QName;
import org.exist.numbering.NodeId;
import org.exist.xquery.*;
import org.exist.xquery.value.*;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;


public class FnOuterMost extends BasicFunction {

    public final static FunctionSignature FNS_OUTERMOST = new FunctionSignature(
            new QName("outermost", Function.BUILTIN_FUNCTION_NS),
            "Returns every node within the input sequence that has no ancestor that is itself a member of the input sequence; the nodes are returned in document order with duplicates eliminated.",
            new SequenceType[] {
                    new FunctionParameterSequenceType("nodes", Type.NODE, Cardinality.ZERO_OR_MORE, "The nodes to test")
            },
            new FunctionReturnSequenceType(Type.NODE, Cardinality.ZERO_OR_MORE, "The nodes that have no ancestor which is itself in the input sequence")
    );

    public FnOuterMost(final XQueryContext context, final FunctionSignature signature) {
        super(context, signature);
    }

    @Override
    public Sequence eval(final Sequence[] args, final Sequence contextSequence) throws XPathException {
        final Sequence nodes = args[0];
        if(nodes.isEmpty()) {
            return Sequence.EMPTY_SEQUENCE;
        } else if(nodes.hasOne()) {
            return nodes;
        } else {
            final Sequence results = new ValueSequence();

            final List<NodeId> nodeIds = getNodeIds(nodes);
            final Set<NodeId> found = new HashSet<>();

            final SequenceIterator it = nodes.iterate();
            while(it.hasNext()) {
                final Item item = it.nextItem();
                final NodeValue node = ((NodeValue)item);
                final NodeId currentNodeId = node.getNodeId();

                if(!found.contains(currentNodeId) &&
                        nodeIds.parallelStream().noneMatch(currentNodeId::isDescendantOf)) {
                    results.add(node);
                    found.add(currentNodeId);
                }
            }

            return results;
        }
    }

    private List<NodeId> getNodeIds(final Sequence nodes) throws XPathException {
        final List<NodeId> nodeIds = new ArrayList<>();
        final SequenceIterator it = nodes.iterate();
        while(it.hasNext()) {
            final Item item = it.nextItem();
            final NodeValue node = ((NodeValue)item);
            nodeIds.add(node.getNodeId());
        }
        return nodeIds;
    }
}
