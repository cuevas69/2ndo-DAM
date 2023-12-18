package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class BibliotecaApplication {

    public static void main(String[] args) {
        SpringApplication.run(BibliotecaApplication.class, args);

        // Crear instancias de Libro y Autor
        Libro libro1 = new Libro(1, "Cien años de soledad", "Gabriel Garcia Marquez", "Novela", 1967);
        Autor autor1 = new Autor(1, "Gabriel Garcia Marquez", "Colombia");

        // Insertar libro y autor utilizando el gestor
        GestorBiblioteca gestor = new GestorBiblioteca();
        gestor.insertarLibro(libro1);
        gestor.insertarAutor(autor1);

        // Consultar para verificar la inserción
        Libro libroConsultado = gestor.leerLibroPorId(1);
        System.out.println("Libro Consultado: " + libroConsultado.getTitulo());

        // Actualizar y eliminar
        libro1.setGenero("Novela realista");
        gestor.actualizarLibro(libro1);
        gestor.eliminarAutor(autor1);

        // Volver a consultar para confirmar actualización y eliminación
        Libro libroActualizado = gestor.leerLibroPorId(1);
        System.out.println("Libro Actualizado: " + libroActualizado.getGenero());

        // Ejemplo de consulta por autor
        List<Libro> librosGabrielGarcia = gestor.consultarPorAutor("Gabriel Garcia Marquez");
        System.out.println("Libros de Gabriel Garcia Marquez:");
        for (Libro libro : librosGabrielGarcia) {
            System.out.println(libro.getTitulo());
        }

        // Ejemplo de consulta por género
        List<Libro> librosNovela = gestor.consultarPorGenero("Novela");
        System.out.println("\nLibros de género Novela:");
        for (Libro libro : librosNovela) {
            System.out.println(libro.getTitulo());
        }

        // Ejemplo de consulta por año de publicación
        List<Libro> librosDespuesDe2000 = gestor.consultarPorAnioPublicacion(2000);
        System.out.println("\nLibros publicados después de 2000:");
        for (Libro libro : librosDespuesDe2000) {
            System.out.println(libro.getTitulo());
        }

        // Ejemplo de consulta de todos los libros ordenados por título
        List<Libro> todosLosLibrosOrdenados = gestor.consultarTodosOrdenadosPorTitulo();
        System.out.println("\nTodos los libros ordenados por título:");
        for (Libro libro : todosLosLibrosOrdenados) {
            System.out.println(libro.getTitulo());
        }

        // Cerrar sesión y sessionFactory al finalizar
        gestor.cerrarSesion();
    }
}
