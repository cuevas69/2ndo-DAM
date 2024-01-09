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
package org.exist.storage;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.exist.plugin.PluginsManagerImpl;
import org.exist.storage.txn.Txn;
import org.exist.util.Configuration;

import java.util.ArrayList;
import java.util.List;

/**
 * Simple manager for Startup Triggers
 *
 * Basically just groups zero or more startup triggers
 * as a single BrokerPoolService
 */
public class StartupTriggersManager implements BrokerPoolService {

    private final static Logger LOG = LogManager.getLogger(PluginsManagerImpl.class);

    private final List<Configuration.StartupTriggerConfig> startupTriggerConfigs = new ArrayList<>();

    @Override
    public void configure(final Configuration configuration) throws BrokerPoolServiceException {
        final List<Configuration.StartupTriggerConfig> startupTriggerConfigs =
                (List<Configuration.StartupTriggerConfig>) configuration
                        .getProperty(BrokerPool.PROPERTY_STARTUP_TRIGGERS);
        if(startupTriggerConfigs != null) {
            this.startupTriggerConfigs.addAll(startupTriggerConfigs);
        }
    }

    @Override
    public void startPreMultiUserSystem(final DBBroker systemBroker, final Txn transaction) throws BrokerPoolServiceException {
        for(final Configuration.StartupTriggerConfig startupTriggerConfig : startupTriggerConfigs) {
            try {
                final Class<StartupTrigger> clazz = (Class<StartupTrigger>) Class.forName(startupTriggerConfig.getClazz());
                final StartupTrigger startupTrigger = clazz.newInstance();
                startupTrigger.execute(systemBroker, transaction, startupTriggerConfig.getParams());
            } catch(final ClassNotFoundException | IllegalAccessException | InstantiationException e) {
                LOG.error("Could not call StartupTrigger class: {}. SKIPPING! {}", startupTriggerConfig, e.getMessage(), e);
            } catch(final RuntimeException re) {
                LOG.warn("StartupTrigger threw RuntimeException: {}. IGNORING!", re.getMessage(), re);
            }
        }
    }
}
