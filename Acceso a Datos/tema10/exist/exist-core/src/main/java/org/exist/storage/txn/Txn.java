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
package org.exist.storage.txn;

import java.util.ArrayList;
import java.util.List;

import net.jcip.annotations.NotThreadSafe;
import com.evolvedbinary.j8fu.function.SupplierE;
import com.evolvedbinary.j8fu.tuple.Tuple2;
import org.apache.logging.log4j.Logger;
import org.apache.logging.log4j.LogManager;
import org.exist.Transaction;
import org.exist.storage.lock.Lock;
import org.exist.storage.lock.Lock.LockMode;
import org.exist.storage.lock.ManagedCollectionLock;
import org.exist.storage.lock.ManagedDocumentLock;
import org.exist.util.LockException;

/**
 * @author wolf
 *
 */
@NotThreadSafe
public class Txn implements Transaction {

    public enum State { STARTED, ABORTED, COMMITTED, CLOSED }

    private final TransactionManager tm;
    private final long id;
    private final List<LockInfo> locksHeld;
    private final List<TxnListener> listeners;
    private State state;


    public Txn(TransactionManager tm, long transactionId) {
        this.tm = tm;
        this.id = transactionId;
        this.locksHeld = new ArrayList<>();
        this.listeners = new ArrayList<>();
        this.state = State.STARTED;
    }

    protected Txn(final Txn txn) {
        this.tm = txn.tm;
        this.id = txn.id;
        this.locksHeld = txn.locksHeld;
        this.listeners = txn.listeners;
        this.state = txn.state;
    }

    public State getState() {
        return state;
    }

    protected void setState(final State state) {
        this.state = state;
    }

    public long getId() {
        return id;
    }

    public void acquireLock(final Lock lock, final LockMode lockMode) throws LockException {
        lock.acquire(lockMode);
        locksHeld.add(new LockInfo(new Tuple2<>(lock, lockMode), () -> lock.release(lockMode)));
    }

    public void acquireCollectionLock(final SupplierE<ManagedCollectionLock, LockException> fnLockAcquire) throws LockException {
        final ManagedCollectionLock lock = fnLockAcquire.get();
        locksHeld.add(new LockInfo(lock, lock::close));
    }

    public void acquireDocumentLock(final SupplierE<ManagedDocumentLock, LockException> fnLockAcquire) throws LockException {
        final ManagedDocumentLock lock = fnLockAcquire.get();
        locksHeld.add(new LockInfo(lock, lock::close));
    }

    public void releaseAll() {
        for (int i = locksHeld.size() - 1; i >= 0; i--) {
            final LockInfo info = locksHeld.get(i);
            info.closer.run();
        }
        locksHeld.clear();
    }

    public void registerListener(final TxnListener listener) {
        listeners.add(listener);
    }

    protected void signalAbort() {
        state = State.ABORTED;
        for (TxnListener listener : listeners) {
            listener.abort();
        }
    }

    protected void signalCommit() {
        state = State.COMMITTED;
        for (TxnListener listener : listeners) {
            listener.commit();
        }
    }

    private static class LockInfo<T> {
        final T lock;
        final Runnable closer;
        
        public LockInfo(final T lock, final Runnable closer) {
            this.lock = lock;
            this.closer = closer;
        }
    }

    @Override
    public void commit() throws TransactionException {
        tm.commit(this);
    }
 
    @Override
    public void abort() {
        tm.abort(this);
    }

    @Override
    public void close() {
        tm.close(this);
    }

    /**
     * A Txn that wraps an underlying transaction
     * so that it can be reused as though it was
     * a standard transaction.
     */
    public static class ReusableTxn extends Txn {

        private final static Logger LOG = LogManager.getLogger(ReusableTxn.class);

        private State reusableState = State.STARTED;
        private final Txn underlyingTransaction;

        public ReusableTxn(final Txn txn) {
            super(txn);
            this.underlyingTransaction = txn;
            if(txn.state != State.STARTED) {
                throw new IllegalStateException("Underlying transaction must be in STARTED state, but is in: " + txn.state + " state.");
            }
        }

        @Override
        public void abort() {
            this.reusableState = State.ABORTED;
            if(underlyingTransaction.state != State.ABORTED) {
                try {
                    super.abort();
                } finally {
                    this.underlyingTransaction.setState(State.ABORTED);
                }
            }
        }

        @Override
        public void commit() throws TransactionException {
            this.reusableState = State.COMMITTED;
        }

        @Override
        public void close() {
            if (reusableState == State.STARTED) {
                if (LOG.isDebugEnabled()) {
                    LOG.debug("Transaction was not committed or aborted, auto aborting!");
                }
                this.reusableState = State.ABORTED;
                if(underlyingTransaction.state != State.CLOSED) {
                    try {
                        super.close();
                    } finally {
                        this.underlyingTransaction.setState(State.CLOSED);
                    }
                }
                this.reusableState = State.CLOSED;
            } else if(reusableState == State.ABORTED) {
                this.reusableState = State.CLOSED;
                if(underlyingTransaction.state != State.CLOSED) {
                    try {
                        super.close();
                    } finally {
                        this.underlyingTransaction.setState(State.CLOSED);
                    }
                }
            } else {
                LOG.debug("Resetting transaction state for next use.");
                this.reusableState = State.STARTED; //reset state for next commit/abort
            }
        }

        @Override
        public void releaseAll() {
            if(reusableState == State.ABORTED) {
                super.releaseAll();
            } else {
                //do nothing as when super#releaseAll is called
                //then the locks acquired on the real transaction are released
                throw new IllegalStateException("You must only call releaseAll on the real underlying transaction");
            }
        }

        Txn getUnderlyingTransaction() {
            return underlyingTransaction;
        }
    }
}
