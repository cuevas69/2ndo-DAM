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
package org.exist.collections.triggers;

import java.util.List;
import java.util.Map;

import org.exist.collections.Collection;
import org.exist.storage.DBBroker;
import org.exist.storage.txn.Txn;

/**
 *
 * @author aretter
 */
public interface TriggerProxy<T extends Trigger> {

    Class<? extends T> getClazz();

    void setParameters(Map<String, List<? extends Object>> parameters);
    
    T newInstance(DBBroker broker, Txn transaction, Collection collection) throws TriggerException;
}
