import java.io.StringReader;
import java.io.StreamTokenizer;
import java.io.IOException;

public class StreamTokenizerExample {

    public static void main(String[] args) {
        // Cadena de texto a analizar
        String input = "Hola, mi edad es 25 y tengo 2 hermanos.";

        // Crear un StreamTokenizer para analizar la cadena
        StreamTokenizer tokenizer = new StreamTokenizer(new StringReader(input));

        // Analizar y clasificar cada token
        try {
            while (tokenizer.nextToken() != StreamTokenizer.TT_EOF) {
                if (tokenizer.ttype == StreamTokenizer.TT_WORD) {
                    // Si el token es una palabra
                    System.out.println("Palabra: " + tokenizer.sval);
                } else if (tokenizer.ttype == StreamTokenizer.TT_NUMBER) {
                    // Si el token es un número
                    System.out.println("Número: " + (int) tokenizer.nval);
                } else {
                    // Si el token es otro tipo de carácter (como comas, puntos, etc.)
                    System.out.println("Otro: " + (char) tokenizer.ttype);
                }
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
