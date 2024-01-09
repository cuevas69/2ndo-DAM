/*
 * NOTE: This file is in part based on code from The dbXML Group.
 * The original license statement is also included below.
 *
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
 *
 * ---------------------------------------------------------------------
 *
 * dbXML License, Version 1.0
 *
 * Copyright (c) 1999-2001 The dbXML Group, L.L.C.
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 *
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 *
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in
 *    the documentation and/or other materials provided with the
 *    distribution.
 *
 * 3. The end-user documentation included with the redistribution,
 *    if any, must include the following acknowledgment:
 *       "This product includes software developed by
 *        The dbXML Group (http://www.dbxml.com/)."
 *    Alternately, this acknowledgment may appear in the software itself,
 *    if and wherever such third-party acknowledgments normally appear.
 *
 * 4. The names "dbXML" and "The dbXML Group" must
 *    not be used to endorse or promote products derived from this
 *    software without prior written permission. For written
 *    permission, please contact info@dbxml.com.
 *
 * 5. Products derived from this software may not be called "dbXML",
 *    nor may "dbXML" appear in their name, without prior written
 *    permission of The dbXML Group.
 *
 * THIS SOFTWARE IS PROVIDED ``AS IS'' AND ANY EXPRESSED OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 * OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED.  IN NO EVENT SHALL THE DBXML GROUP OR
 * ITS CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF
 * USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
 * OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT
 * OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
 * SUCH DAMAGE.
 */
package org.exist.storage.btree;

import java.util.Arrays;

/**
 * IndexQuery represents the most primitive form of index querying.
 * Instances of this object should be created by QueryResolvers and
 * cached in Query instances.
 */

public class IndexQuery {

    // No Operator
    public static final int ANY = 0;   // Any And All Matches

    // Singleton Operators
    public static final int EQ = 1;    // Equal To
    public static final int NEQ = -1;  // Not Equal To
    public static final int GT = 2;    // Greater Than
    public static final int LEQ = -2;  // Less Than Or Equal To
    public static final int LT = 3;    // Less Than
    public static final int GEQ = -3;  // Greater Than Or Equal To

    // Range Operators
    public static final int BW = 4;    // Between (Inclusive)
    public static final int NBW = -4;  // Not Between (Inclusive)
    public static final int BWX = 5;   // Between (Exclusive)
    public static final int NBWX = -5; // Not Between (Exclusive)

    // Set Operators
    public static final int IN = 6;    // In The Set
    public static final int NIN = -6;  // Not In The Set

    // Truncation Operator
    public static final int TRUNC_RIGHT = 7;
    public static final int TRUNC_LEFT = 8;

    public static final int REGEXP = 9;

    public static final int RANGE = 10;

    private final int op;
    private final Value[] vals;

    public IndexQuery() {
        this(ANY, (Value[]) null);
    }

    public IndexQuery(final Value val1) {
        this(EQ, val1);
    }

    public IndexQuery(final String val1) {
        this(new Value(val1));
    }

    public IndexQuery(final int op, final Value val1) {
        this(op, new Value[]{val1});
    }

    public IndexQuery(final int op, final String val1) {
        this(op, new Value(val1));
    }

    public IndexQuery(final Value val1, final Value val2) {
        this(IN, val1, val2);
    }

    public IndexQuery(final String val1, final String val2) {
        this(new Value(val1), new Value(val2));
    }

    public IndexQuery(final int op, final Value val1, final Value val2) {
        this(op, new Value[]{val1, val2});
    }

    public IndexQuery(final int op, final String val1, final String val2) {
        this(op, new Value(val1), new Value(val2));
    }

    public IndexQuery(final Value[] vals) {
        this(IN, vals);
    }

    public IndexQuery(final int op, final Value[] vals) {
        this.op = op;
        this.vals = vals;
    }

    /**
     * getOperator returns the operator associated with this query.
     *
     * @return The operator
     */
    public int getOperator() {
        return op;
    }

    /**
     * getValue returns one of the Values associated with this query.
     *
     * @param index The Value index
     * @return The request Value
     */
    public final Value getValue(final int index) {
        return vals[index];
    }

    /**
     * getValues returns the Values associated with this query.
     *
     * @return The Value set
     */
    public Value[] getValues() {
        return vals;
    }

    /**
     * getLength returns the length of the Value set associated with
     * this query.
     *
     * @return The Value set length
     */
    public final int getLength() {
        return vals.length;
    }

    /**
     * testValue tests the specified value for validity against this
     * IndexQuery.  The helper classes in org.dbxml.core.indexer.helpers
     * should be used for optimized performance.
     *
     * @param value The Value to compare
     * @return Whether or not the value matches
     */
    public boolean testValue(final Value value) {
        switch (op) {
            // No Comparison (Any)
            case ANY:
                return true;
            // Singleton Comparisons
            case EQ:
                return value.equals(vals[0]);
            case NEQ:
                return !value.equals(vals[0]);
            case GT:
                return value.compareTo(vals[0]) > 0;
            case GEQ:
                return value.compareTo(vals[0]) >= 0;
            case LT:
                return value.compareTo(vals[0]) < 0;
            case LEQ:
                return value.compareTo(vals[0]) <= 0;
            // Range Comparisons
            case BW:
                return value.compareTo(vals[0]) >= 0 && value.compareTo(vals[1]) <= 0;
            case NBW:
                return value.compareTo(vals[0]) <= 0 || value.compareTo(vals[1]) >= 0;
            case BWX:
                return value.compareTo(vals[0]) > 0 && value.compareTo(vals[1]) < 0;
            case NBWX:
                return value.compareTo(vals[0]) < 0 || value.compareTo(vals[1]) > 0;
            case RANGE:
                return value.compareTo(vals[0]) >= 0 && value.compareTo(vals[1]) < 0;
            // Set Comparisons
            case IN:
            case NIN:
                return Arrays.binarySearch(vals, value) >= 0 ? op == IN : op == NIN;
            case TRUNC_RIGHT:
                return value.startsWith(vals[0]);
            case TRUNC_LEFT:
                return value.endsWith(vals[0]);
        }
        return false;
    }
}
