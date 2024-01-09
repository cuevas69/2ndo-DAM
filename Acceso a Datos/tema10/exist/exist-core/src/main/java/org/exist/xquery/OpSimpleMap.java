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
package org.exist.xquery;

import org.exist.xquery.util.ExpressionDumper;
import org.exist.xquery.value.Item;
import org.exist.xquery.value.Sequence;
import org.exist.xquery.value.SequenceIterator;
import org.exist.xquery.value.ValueSequence;

/**
 * Implements the XQuery 3.0 simple map operator "!".
 */
public class OpSimpleMap extends AbstractExpression {

    private Expression left;
    private PathExpr right;

    public OpSimpleMap(XQueryContext context, PathExpr left, PathExpr right) {
        super(context);
        this.left = left;
        this.right = right;
    }

    @Override
    public void analyze(AnalyzeContextInfo contextInfo) throws XPathException {
        left.analyze(new AnalyzeContextInfo(contextInfo));
        right.analyze(new AnalyzeContextInfo(contextInfo));
    }

    @Override
    public Sequence eval(Sequence contextSequence, Item contextItem) throws XPathException {
        if (contextItem != null)
            {contextSequence = contextItem.toSequence();}
        final Sequence leftSeq = left.eval(contextSequence);
        if (leftSeq.isEmpty())
            {return Sequence.EMPTY_SEQUENCE;}

        final ValueSequence result = new ValueSequence();
        int pos = 0;
        for (final SequenceIterator i = leftSeq.iterate(); i.hasNext(); pos++) {
            context.setContextSequencePosition(pos, leftSeq);
            final Sequence rightSeq = right.eval(i.nextItem().toSequence());
            result.addAll(rightSeq);
        }
        return result;
    }

    @Override
    public int returnsType() {
        return right.returnsType();
    }

    @Override
    public Cardinality getCardinality() {
        return Cardinality.ZERO_OR_MORE;
    }

    @Override
    public void dump(final ExpressionDumper dumper) {
        left.dump(dumper);
        dumper.display(" ! ");
        right.dump(dumper);
    }

    @Override
    public String toString() {
        final StringBuilder result = new StringBuilder();
        result.append(left.toString());
        result.append(" ! ");
        result.append(right.toString());
        return result.toString();
    }

    public Expression getLeft() {
        return left;
    }

    public PathExpr getRight() {
        return right;
    }

    @Override
    public void accept(ExpressionVisitor visitor) {
        visitor.visitSimpleMapOperator(this);
    }

    @Override
    public void resetState(boolean postOptimization) {
        super.resetState(postOptimization);
        left.resetState(postOptimization);
        right.resetState(postOptimization);
    }
}
