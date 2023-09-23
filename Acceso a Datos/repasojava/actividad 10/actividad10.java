// 10. Gestión de bases de datos relacionales:
// • Desarrolla un programa que simule una conexión a una base de datos relacional.
// Aunque no es necesario que realice una conexión real, debe simular operaciones
// básicas como seleccionar, insertar y eliminar registros.

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Registro {
    private int id;
    private String nombre;

    public Registro(int id, String nombre) {
        this.id = id;
        this.nombre = nombre;
    }

    public int getId() {
        return id;
    }

    public String getNombre() {
        return nombre;
    }

    @Override
    public String toString() {
        return "ID: " + id + ", Nombre: " + nombre;
    }
}

public class actividad10 {
    private static List<Registro> baseDeDatos = new ArrayList<>();
    private static int siguienteID = 1;

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        while (true) {
            System.out.println("\nOpciones:");
            System.out.println("1. Seleccionar registros");
            System.out.println("2. Insertar registro");
            System.out.println("3. Eliminar registro");
            System.out.println("4. Salir");

            System.out.print("Seleccione una opción: ");
            int opcion = scanner.nextInt();
            scanner.nextLine();  // Consumir la nueva línea después de leer la opción

            switch (opcion) {
                case 1:
                    seleccionarRegistros();
                    break;
                case 2:
                    System.out.print("Ingrese el nombre del nuevo registro: ");
                    String nuevoNombre = scanner.nextLine();
                    insertarRegistro(nuevoNombre);
                    break;
                case 3:
                    System.out.print("Ingrese el ID del registro a eliminar: ");
                    int idEliminar = scanner.nextInt();
                    scanner.nextLine();  // Consumir la nueva línea después de leer el ID
                    eliminarRegistro(idEliminar);
                    break;
                case 4:
                    System.exit(0);
                default:
                    System.out.println("Opción no válida.");
                    break;
            }
        }
    }

    private static void seleccionarRegistros() {
        System.out.println("\nRegistros en la base de datos:");
        for (Registro registro : baseDeDatos) {
            System.out.println(registro);
        }
    }

    private static void insertarRegistro(String nombre) {
        Registro nuevoRegistro = new Registro(siguienteID, nombre);
        baseDeDatos.add(nuevoRegistro);
        siguienteID++;
        System.out.println("Registro insertado con éxito.");
    }

    private static void eliminarRegistro(int id) {
        for (Registro registro : baseDeDatos) {
            if (registro.getId() == id) {
                baseDeDatos.remove(registro);
                System.out.println("Registro eliminado con éxito.");
                return;
            }
        }
        System.out.println("Registro con ID " + id + " no encontrado en la base de datos.");
    }
}
