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
package org.exist.http.urlrewrite;

import org.w3c.dom.Element;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletConfig;
import javax.servlet.http.HttpServletRequest;

public class PassThrough extends Forward {
    private final ServletConfig servletConfig;

    public PassThrough(final ServletConfig servletConfig, final HttpServletRequest request) {
        super(null, request.getRequestURI());
        this.servletConfig = servletConfig;
        this.target = request.getRequestURI().substring(request.getContextPath().length());
    }

    public PassThrough(final ServletConfig servletConfig, final Element config, final HttpServletRequest request) {
        super(config, request.getRequestURI());
        this.servletConfig = servletConfig;
        this.target = request.getRequestURI().substring(request.getContextPath().length());
    }

    public PassThrough(final PassThrough other) {
        super(other);
        this.servletConfig = other.servletConfig;
    }

    @Override
    protected RequestDispatcher getRequestDispatcher(final HttpServletRequest request) {
        // always forward to the servlet engine's default servlet
        return servletConfig.getServletContext().getNamedDispatcher("default");
    }

    @Override
    protected URLRewrite copy() {
        return new PassThrough(this);
    }
}