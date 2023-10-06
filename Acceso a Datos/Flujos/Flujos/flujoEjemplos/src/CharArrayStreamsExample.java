import java.io.*;

public class CharArrayStreamsExample {

    public static void main(String[] args) {
        try {
            // Instanciamos un array de caracteres
            char[] chars = "Hola, ¡bienvenido a Java!".toCharArray();

            // Encapsulamos el array en un CharArrayReader
            CharArrayReader charArrayReader = new CharArrayReader(chars);

            // Leemos el objeto charArrayReader carácter por carácter
            int caracter;
            System.out.println("Contenido del array:");
            while ((caracter = charArrayReader.read()) != -1) {
                // OPERACIONES: en este caso, imprimimos por pantalla el carácter
                System.out.print((char) caracter);
            }

            // Cerramos el CharArrayReader, liberando los recursos
            charArrayReader.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
