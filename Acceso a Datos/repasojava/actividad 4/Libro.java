// 4. Programación orientada a objetos:
// – Diseña una clase llamada "Libro" con atributos: título, autor y número de
// páginas. Incluye métodos para obtener y establecer estos atributos. Crea
// un objeto de esta clase y muestra sus detalles.

public class Libro {
    // Atributos
    private String titulo;
    private String autor;
    private int numeroPaginas;

    // Constructor
    public Libro(String titulo, String autor, int numeroPaginas) {
        this.titulo = titulo;
        this.autor = autor;
        this.numeroPaginas = numeroPaginas;
    }

    // Métodos para obtener y establecer los atributos
    public String getTitulo() {
        return titulo;
    }

    public void setTitulo(String titulo) {
        this.titulo = titulo;
    }

    public String getAutor() {
        return autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

    public int getNumeroPaginas() {
        return numeroPaginas;
    }

    public void setNumeroPaginas(int numeroPaginas) {
        this.numeroPaginas = numeroPaginas;
    }

    // Método para imprimir los detalles del libro
    public void mostrarDetalles() {
        System.out.println("Detalles del Libro:");
        System.out.println("Título: " + titulo);
        System.out.println("Autor: " + autor);
        System.out.println("Número de Páginas: " + numeroPaginas);
    }

    public static void main(String[] args) {
        // Crear un objeto de la clase Libro
        Libro miLibro = new Libro("Va mal el internet del Medac", "Andres Cuevas", 69);

        // Mostrar los detalles del libro
        miLibro.mostrarDetalles();
    }
}
