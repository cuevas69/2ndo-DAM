package com.example.demo;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;


import java.util.List;

public class GestorBiblioteca {

    private final SessionFactory sessionFactory;
    private final Session session;

    public GestorBiblioteca() {
        sessionFactory = HibernateUtils.getSessionFactory();
        session = sessionFactory.openSession();
    }

    public void insertarLibro(Libro libro) {
        try {
            session.beginTransaction();
            session.merge(libro);
            session.getTransaction().commit();
        } catch (Exception e) {
            manejarExcepcion(e);
        }
    }

    public Libro leerLibroPorId(int id) {
        try {
            return session.get(Libro.class, id);
        } catch (Exception e) {
            manejarExcepcion(e);
            return null;
        }
    }

    public void actualizarLibro(Libro libro) {
        try {
            session.beginTransaction();
            session.merge(libro);
            session.getTransaction().commit();
        } catch (Exception e) {
            manejarExcepcion(e);
        }
    }

    public void eliminarLibro(Libro libro) {
        try {
            session.beginTransaction();
            session.remove(libro);
            session.getTransaction().commit();
        } catch (Exception e) {
            manejarExcepcion(e);
        }
    }

    public void insertarAutor(Autor autor) {
        try {
            session.beginTransaction();
            session.merge(autor);
            session.getTransaction().commit();
        } catch (Exception e) {
            manejarExcepcion(e);
        }
    }

    public void eliminarAutor(Autor autor) {
        try {
            session.beginTransaction();
            session.remove(autor);
            session.getTransaction().commit();
        } catch (Exception e) {
            manejarExcepcion(e);
        }
    }

    public List<Libro> consultarPorAutor(String autor) {
        try {
            String hql = "FROM Libro L WHERE L.autor = :autor";
            Query<Libro> query = session.createQuery(hql, Libro.class);
            query.setParameter("autor", autor);
            return query.list();
        } catch (Exception e) {
            manejarExcepcion(e);
            return null;
        }
    }

    public List<Libro> consultarPorGenero(String genero) {
        try {
            String hql = "FROM Libro L WHERE L.genero = :genero";
            Query<Libro> query = session.createQuery(hql, Libro.class);
            query.setParameter("genero", genero);
            return query.list();
        } catch (Exception e) {
            manejarExcepcion(e);
            return null;
        }
    }

    public List<Libro> consultarPorAnioPublicacion(int anio) {
        try {
            String hql = "FROM Libro L WHERE L.anioPublicacion > :anio";
            Query<Libro> query = session.createQuery(hql, Libro.class);
            query.setParameter("anio", anio);
            return query.list();
        } catch (Exception e) {
            manejarExcepcion(e);
            return null;
        }
    }

    public List<Libro> consultarTodosOrdenadosPorTitulo() {
        try {
            String hql = "FROM Libro L ORDER BY L.titulo ASC";
            Query<Libro> query = session.createQuery(hql, Libro.class);
            return query.list();
        } catch (Exception e) {
            manejarExcepcion(e);
            return null;
        }
    }

    public void cerrarSesion() {
        if (session != null && session.isOpen()) {
            session.close();
        }
    }

    private void manejarExcepcion(Exception e) {
        if (session.getTransaction() != null) {
            session.getTransaction().rollback();
        }
        e.printStackTrace();
    }
}
