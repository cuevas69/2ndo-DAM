// 9. Bases de datos orientadas a objetos:
// – Escribe un programa que simule una pequeña base de datos de productos
// utilizando clases. Debe permitir agregar, eliminar y mostrar productos.

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Scanner;

//clase en la que declararemos los productos con sus atributos
class Producto {
    // Atributos
    private String nombre;
    private double precio;
    private int stock;

    // Getters y setters
    public Producto(String nombre, double precio, int stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    public String getNombre() {
        return nombre;
    }

    public double getPrecio() {
        return precio;
    }

    public int getStock() {
        return stock;
    }

    //toString para devolver los atributos
    @Override
    public String toString() {
        return "Nombre: " + nombre + ", Precio: " + precio + ", Stock: " + stock;
    }
}

//clase en la que declararemos la base de datos que almacenará los productos
class BaseDeDatosProductos {
    private List<Producto> productos = new ArrayList<>();

    public void agregarProducto(Producto producto) {
        productos.add(producto);
        System.out.println("Producto " + producto.getNombre() + " agregado a la base de datos.");
    }

    public void eliminarProducto(String nombre) {
        Iterator<Producto> iterator = productos.iterator();
        while (iterator.hasNext()) {
            Producto producto = iterator.next();
            if (producto.getNombre().equals(nombre)) {
                iterator.remove();
                System.out.println("Producto " + nombre + " eliminado de la base de datos.");
                return;
            }
        }
        System.out.println("Producto " + nombre + " no encontrado en la base de datos.");
    }

    public void mostrarProductos() {
        if (productos.isEmpty()) {
            System.out.println("La base de datos de productos está vacía.");
        } else {
            System.out.println("Lista de productos:");
            for (Producto producto : productos) {
                System.out.println(producto);
            }
        }
    }
}

public class actividad9 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        BaseDeDatosProductos baseDeDatos = new BaseDeDatosProductos();

        while (true) {
            System.out.println("\nOpciones:");
            System.out.println("1. Agregar producto");
            System.out.println("2. Eliminar producto");
            System.out.println("3. Mostrar productos");
            System.out.println("4. Salir");

            System.out.print("Seleccione una opción: ");
            int opcion = scanner.nextInt();
            scanner.nextLine();  // Consumir la nueva línea después de leer la opción

            switch (opcion) {
                case 1:
                    System.out.print("Nombre del producto: ");
                    String nombre = scanner.nextLine();
                    System.out.print("Precio del producto: ");
                    double precio = scanner.nextDouble();
                    System.out.print("Stock del producto: ");
                    int stock = scanner.nextInt();
                    scanner.nextLine();  // Consumir la nueva línea después de leer el stock
                    Producto producto = new Producto(nombre, precio, stock);
                    baseDeDatos.agregarProducto(producto);
                    break;
                case 2:
                    System.out.print("Nombre del producto a eliminar: ");
                    String nombreEliminar = scanner.nextLine();
                    baseDeDatos.eliminarProducto(nombreEliminar);
                    break;
                case 3:
                    baseDeDatos.mostrarProductos();
                    break;
                case 4:
                    System.exit(0);
                default:
                    System.out.println("Opción no válida.");
                    break;
            }
        }
    }
}