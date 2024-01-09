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
package org.exist.xupdate;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.exist.EXistException;
import org.exist.collections.triggers.TriggerException;
import org.exist.dom.persistent.DocumentSet;
import org.exist.security.PermissionDeniedException;
import org.exist.source.Source;
import org.exist.source.StringSource;
import org.exist.storage.DBBroker;
import org.exist.storage.XQueryPool;
import org.exist.storage.txn.Txn;
import org.exist.util.LockException;
import org.exist.xquery.CompiledXQuery;
import org.exist.xquery.XPathException;
import org.exist.xquery.XQuery;
import org.exist.xquery.XQueryContext;
import org.exist.xquery.value.Sequence;

/**
 * @author wolf
 */
public class Conditional extends Modification {

	private List<Modification> modifications = new ArrayList<>(5);
	
	/**
	 * @param broker the database broker.
	 * @param docs the document working set.
	 * @param selectStmt the select statement.
	 * @param namespaces the namespaces.
	 * @param variables the variables.
	 */
	public Conditional(DBBroker broker, DocumentSet docs, String selectStmt,
			Map<String, String> namespaces, Map<String, Object> variables) {
		super(broker, docs, selectStmt, namespaces, variables);
	}

	public void addModification(Modification mod) {
		modifications.add(mod);
	}
	
	@Override
	public long process(Txn transaction) throws PermissionDeniedException, LockException,
			EXistException, XPathException, TriggerException {
		LOG.debug("Processing xupdate:if ...");
		final XQuery xquery = broker.getBrokerPool().getXQueryService();
		final XQueryPool pool = broker.getBrokerPool().getXQueryPool();
		final Source source = new StringSource(selectStmt);
		CompiledXQuery compiled = pool.borrowCompiledXQuery(broker, source);
		XQueryContext context;
		if(compiled == null) {
			context = new XQueryContext(broker.getBrokerPool());
		} else {
			context = compiled.getContext();
			context.prepareForReuse();
		}
		//context.setBackwardsCompatibility(true);
		context.setStaticallyKnownDocuments(docs);
		declareNamespaces(context);
		declareVariables(context);
		if(compiled == null)
			try {
				compiled = xquery.compile(context, source);
			} catch (final IOException e) {
				throw new EXistException("An exception occurred while compiling the query: " + e.getMessage());
			}
		
		Sequence seq = null;
		try {
			seq = xquery.execute(broker, compiled, null);
		} finally {
			context.runCleanupTasks();
			pool.returnCompiledXQuery(source, compiled);
		}
		if(seq.effectiveBooleanValue()) {
			long mods = 0;
			for (final Modification modification : modifications) {
				mods += modification.process(transaction);
				broker.flush();
			}
			
			if (LOG.isDebugEnabled())
				{
                    LOG.debug("{} modifications processed.", mods);}
			
			return mods;
		} else
			{return 0;}
	}

	@Override
	public String getName() {
		return "if";
	}

}
