import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        // Pedir al usuario que introduzca un texto
        System.out.print("Introduce un texto: ");
        String textoUsuario = scanner.nextLine();

        // Nombre del archivo donde se almacenará el texto
        String nombreArchivo = "texto_guardado.txt";

        // Escribir el texto en el archivo
        try (BufferedWriter writer = new BufferedWriter(new FileWriter(nombreArchivo))) {
            writer.write(textoUsuario);
            System.out.println("Texto almacenado en el archivo correctamente.");
        } catch (IOException e) {
            System.err.println("Error al escribir en el archivo: " + e.getMessage());
        }

        // Leer el contenido del archivo y mostrarlo en la consola
        try (BufferedReader reader = new BufferedReader(new FileReader(nombreArchivo))) {
            System.out.println("Contenido del archivo:");
            String linea;
            while ((linea = reader.readLine()) != null) {
                System.out.println(linea);
            }
        } catch (IOException e) {
            System.err.println("Error al leer el archivo: " + e.getMessage());
        }

        scanner.close();
    }
}
