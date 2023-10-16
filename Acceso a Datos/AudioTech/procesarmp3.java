import java.io.File;
import java.io.FileInputStream;
import java.io.FileWriter;
import java.io.IOException;

public class procesarmp3 {
    public static void main(String[] args) {
        String filePath = "cancion.mp3"; //Implementamos la ruta del archivo .mp3
        int cporlinea = 15; // Número de caracteres por línea

        try {
            //Primera Parte, Importación de archivos y conversión de bytes del .mp3 a hexadecimal

            File mp3 = new File(filePath);
            FileInputStream process = new FileInputStream(mp3); //Declaramos la variable que leerá el archivo .mp3

            byte[] buffer = new byte[(int) mp3.length()]; //Función que calculará el tamaño de los byte.
            process.read(buffer);

            StringBuilder hexadecimal = new StringBuilder(); 
            for (byte b : buffer) {
                hexadecimal.append(String.format("%02X", b)); //Formateamos el byte b como un hexadecimal de dos dígitos
            }

            String conversion = hexadecimal.toString(); //Realizamos la conversión hexadecimal

            process.close();

            //Segunda Parte, Almacenamiento de la conversión realizada representada en caracteres

            FileWriter writer = new FileWriter("representacionhex.txt"); //Ruta del archivo de salida
            int totalLineas = 0;
            for (int i = 0; i < conversion.length(); i += cporlinea) { //Implementamos un bucle for que recorra los caracteres por linea
                String linea = conversion.substring(i, Math.min(i + cporlinea, conversion.length())); 
                writer.write(linea + "\n"); //Metemos un salto de linea cada vez que recorra 15 caracteres
                totalLineas++;
            }
            writer.close();

            System.out.println("Número total de líneas generadas: " + totalLineas); //Mostramos el total de lineas generadas

            process.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}