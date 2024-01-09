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
package org.exist.xquery.util;

import java.util.Locale;

/**
 * English formatter for numbers and dates.
 *
 * @author Wolfgang
 */
public class NumberFormatter_en extends NumberFormatter {

    public NumberFormatter_en(final Locale locale) {
        super(locale);
    }

    @Override
    public String getOrdinalSuffix(long number) {
        if (number > 10 && number < 20)
            {return "th";}
        final long mod = number % 10;
        if (mod == 1)
            {return "st";}
        else if (mod == 2)
            {return "nd";}
        else if (mod == 3)
            {return "rd";}
        else
            {return "th";}
    }
}