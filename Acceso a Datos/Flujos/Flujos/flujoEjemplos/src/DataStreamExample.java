import java.io.DataOutputStream;
import java.io.DataInputStream;
import java.io.FileOutputStream;
import java.io.FileInputStream;
import java.io.IOException;

public class DataStreamExample {

    public static void main(String[] args) {
        // Ruta del archivo binario que vamos a crear y luego leer.
        String filePath = "data.bin";

        // Primero, escribimos datos primitivos en el archivo binario.
        writeData(filePath);

        // Luego, leemos esos datos primitivos del archivo binario y los mostramos.
        readData(filePath);
    }

    private static void writeData(String filePath) {
        // Usamos try-with-resources para asegurarnos de que el stream se cierre automáticamente al final.
        try (DataOutputStream dos = new DataOutputStream(new FileOutputStream(filePath))) {
            // Escribir un valor entero (4 bytes) en el archivo.
            dos.writeInt(123);

            // Escribir un valor flotante (4 bytes) en el archivo.
            dos.writeFloat(123.45F);

            // Escribir un valor long (8 bytes) en el archivo.
            dos.writeLong(789L);

            // Escribir una cadena de texto en el archivo. 
            // Primero se escribe la longitud de la cadena y luego los caracteres.
            dos.writeUTF("Hola Mundo");
        } catch (IOException e) {
            // Si ocurre algún error al escribir en el archivo, se muestra el error.
            e.printStackTrace();
        }
    }

    private static void readData(String filePath) {
        // Usamos try-with-resources para asegurarnos de que el stream se cierre automáticamente al final.
        try (DataInputStream dis = new DataInputStream(new FileInputStream(filePath))) {
            // Leer un valor entero (4 bytes) del archivo.
            int entero = dis.readInt();

            // Leer un valor flotante (4 bytes) del archivo.
            float numeroFloat = dis.readFloat();

            // Leer un valor long (8 bytes) del archivo.
            long numeroLong = dis.readLong();

            // Leer una cadena de texto del archivo.
            // Primero se lee la longitud de la cadena y luego los caracteres.
            String texto = dis.readUTF();

            // Mostrar los datos leídos en la consola.
            System.out.println("Entero: " + entero);
            System.out.println("Flotante: " + numeroFloat);
            System.out.println("Long: " + numeroLong);
            System.out.println("Texto: " + texto);
        } catch (IOException e) {
            // Si ocurre algún error al leer del archivo, se muestra el error.
            e.printStackTrace();
        }
    }
}
