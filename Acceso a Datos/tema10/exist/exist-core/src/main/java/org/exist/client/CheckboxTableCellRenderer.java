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
package org.exist.client;

import com.evolvedbinary.j8fu.tuple.Tuple2;

import java.awt.Component;
import java.util.function.Function;
import javax.swing.JCheckBox;
import javax.swing.JTable;
import javax.swing.SwingConstants;
import javax.swing.UIManager;
import javax.swing.border.Border;
import javax.swing.border.EmptyBorder;
import javax.swing.plaf.UIResource;
import javax.swing.table.TableCellRenderer;

/**
 * Renders a T as a JCheckBox.
 *
 * @author <a href="mailto:adam@evolvedbinary.com">Adam Retter</a>
 */
public class CheckboxTableCellRenderer<T> extends JCheckBox
        implements TableCellRenderer, UIResource {
    
    private static final Border noFocusBorder = new EmptyBorder(1, 1, 1, 1);
    private final Function<T, Tuple2<String, Boolean>> valueStateFn;

    public CheckboxTableCellRenderer(final Function<T, Tuple2<String, Boolean>> valueStateFn) {
        super();
        setHorizontalAlignment(SwingConstants.LEFT);
        setBorderPainted(true);
        setHorizontalTextPosition(SwingConstants.RIGHT);
        this.valueStateFn = valueStateFn;
    }

    @Override
    public Component getTableCellRendererComponent(final JTable table, final Object value, 
            final boolean isSelected, final boolean hasFocus, final int row, final int column) {
        
        if (isSelected) {
            setForeground(table.getSelectionForeground());
            super.setBackground(table.getSelectionBackground());
        } else {
            setForeground(table.getForeground());
            setBackground(table.getBackground());
        }
        
        //set selected
        final Tuple2<String, Boolean> state = valueStateFn.apply((T)value);
        setSelected(state._2 != null && state._2);

        //set label
        if (value != null) {
            setText(state._1);
        }

        if (hasFocus) {
            setBorder(UIManager.getBorder("Table.focusCellHighlightBorder"));
        } else {
            setBorder(noFocusBorder);
        }

        return this;
    }
}
