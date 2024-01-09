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

package org.exist.xquery.functions.inspect;

import org.exist.dom.QName;
import org.exist.dom.memtree.MemTreeBuilder;
import org.exist.xquery.*;
import org.exist.xquery.value.FunctionParameterSequenceType;
import org.exist.xquery.value.FunctionReturnSequenceType;
import org.exist.xquery.value.SequenceType;
import org.exist.xquery.value.Type;
import org.exist.xquery.xqdoc.XQDocHelper;
import org.xml.sax.helpers.AttributesImpl;

import javax.xml.XMLConstants;
import java.util.Map;
import java.util.Set;

public class InspectFunctionHelper {

    static final QName ARGUMENT_QNAME = new QName("argument", XMLConstants.NULL_NS_URI);
    static final QName DEPRECATED_QNAME = new QName("deprecated", XMLConstants.NULL_NS_URI);
    static final QName DESCRIPTION_QNAME = new QName("description", XMLConstants.NULL_NS_URI);
    static final QName RETURN_QNAME = new QName("returns", XMLConstants.NULL_NS_URI);
    static final QName FUNCTION_QNAME = new QName("function", XMLConstants.NULL_NS_URI);
    static final QName ANNOTATION_QNAME = new QName("annotation", XMLConstants.NULL_NS_URI);
    static final QName ANNOTATION_VALUE_QNAME = new QName("value", XMLConstants.NULL_NS_URI);
    static final QName VERSION_QNAME = new QName("version", XMLConstants.NULL_NS_URI);
    static final QName AUTHOR_QNAME = new QName("author", XMLConstants.NULL_NS_URI);
    static final QName CALLS_QNAME = new QName("calls", XMLConstants.NULL_NS_URI);

    /**
     * Generate an XML fragment containing information about the function identified by its signature.
     *
     * @param sig the signature of the function to describe
     * @param func the function implementation. If provided, the method will also inspect the function body
     *             and list all functions called from the current function.
     * @param builder builder used to create the XML
     * @return nodeNr of the generated element
     * @throws XPathException in case of dynamic error
     */
    public static int generateDocs(final FunctionSignature sig, final UserDefinedFunction func, final MemTreeBuilder builder) throws XPathException {
        XQDocHelper.parse(sig);

        final AttributesImpl attribs = new AttributesImpl();
        attribs.addAttribute("", "name", "name", "CDATA", sig.getName().toString());
        attribs.addAttribute("", "module", "module", "CDATA", sig.getName().getNamespaceURI());
        final int nodeNr = builder.startElement(FUNCTION_QNAME, attribs);
        writeParameters(sig, builder);
        final SequenceType returnType = sig.getReturnType();
        if (returnType != null) {
            attribs.clear();
            attribs.addAttribute("", "type", "type", "CDATA", Type.getTypeName(returnType.getPrimaryType()));
            attribs.addAttribute("", "cardinality", "cardinality", "CDATA", returnType.getCardinality().getHumanDescription());
            builder.startElement(RETURN_QNAME, attribs);
            if (returnType instanceof FunctionReturnSequenceType) {
                final FunctionReturnSequenceType type = (FunctionReturnSequenceType) returnType;
                builder.characters(type.getDescription());
            }
            builder.endElement();
        }
        writeAnnotations(sig, builder);
        if (sig.getDescription() != null) {
            builder.startElement(DESCRIPTION_QNAME, null);
            builder.characters(sig.getDescription());
            builder.endElement();
        }
        final Map<String, String> metadata = sig.getMetadata();
        if (metadata != null) {
            for (final Map.Entry<String, String> meta : metadata.entrySet()) {
                builder.startElement(new QName(meta.getKey(), XMLConstants.NULL_NS_URI), null);
                builder.characters(meta.getValue());
                builder.endElement();
            }
        }
        if (sig.isDeprecated()) {
            builder.startElement(DEPRECATED_QNAME, null);
            builder.characters(sig.getDeprecated());
            builder.endElement();
        }
        if (func != null) {
            generateDependencies(func, builder);
        }
        builder.endElement();
        return nodeNr;
    }

    private static void writeParameters(final FunctionSignature sig, final MemTreeBuilder builder) {
        final SequenceType[] arguments = sig.getArgumentTypes();
        if (arguments != null) {
            final AttributesImpl attribs = new AttributesImpl();
            for (final SequenceType type: arguments) {
                attribs.clear();
                attribs.addAttribute("", "type", "type", "CDATA", Type.getTypeName(type.getPrimaryType()));
                attribs.addAttribute("", "cardinality", "cardinality", "CDATA", type.getCardinality().getHumanDescription());
                if (type instanceof FunctionParameterSequenceType)
                {attribs.addAttribute("", "var", "var", "CDATA", ((FunctionParameterSequenceType)type).getAttributeName());}
                builder.startElement(ARGUMENT_QNAME, attribs);
                if (type instanceof FunctionParameterSequenceType) {
                    builder.characters(((FunctionParameterSequenceType)type).getDescription());
                }
                builder.endElement();
            }
        }
    }

    private static void writeAnnotations(final FunctionSignature signature, final MemTreeBuilder builder) throws XPathException {
        final AttributesImpl attribs = new AttributesImpl();
        final Annotation[] annots = signature.getAnnotations();
        if (annots != null) {
            for (final Annotation annot : annots) {
                attribs.clear();
                attribs.addAttribute(null, "name", "name", "CDATA", annot.getName().toString());
                attribs.addAttribute(null, "namespace", "namespace", "CDATA", annot.getName().getNamespaceURI());
                builder.startElement(ANNOTATION_QNAME, attribs);
                final LiteralValue[] value = annot.getValue();
                if (value != null) {
                    for (final LiteralValue literal : value) {
                        builder.startElement(ANNOTATION_VALUE_QNAME, null);
                        builder.characters(literal.getValue().getStringValue());
                        builder.endElement();
                    }
                }
                builder.endElement();
            }
        }
    }

    /**
     * Inspect the provided function implementation and return an XML fragment listing all
     * functions called from the function.
     *
     * @param function the function to inspect
     * @param builder to write output to
     */
    private static void generateDependencies(final UserDefinedFunction function, final MemTreeBuilder builder) {
        FunctionCallVisitor visitor = new FunctionCallVisitor();
        function.getFunctionBody().accept(visitor);
        Set<FunctionSignature> signatures = visitor.getFunctionCalls();
        if (signatures.isEmpty()) {
            return;
        }
        builder.startElement(CALLS_QNAME, null);
        final AttributesImpl attribs = new AttributesImpl();
        for (final FunctionSignature signature : signatures) {
            attribs.clear();
            attribs.addAttribute(null, "name", "name", "CDATA", signature.getName().toString());
            attribs.addAttribute("", "module", "module", "CDATA", signature.getName().getNamespaceURI());
            attribs.addAttribute("", "arity", "arity", "CDATA", Integer.toString(signature.getArgumentCount()));

            builder.startElement(FUNCTION_QNAME, attribs);
            builder.endElement();
        }
        builder.endElement();
    }
}
