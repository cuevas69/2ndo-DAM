import java.io.FileWriter;
import java.io.FileReader;
import java.io.LineNumberReader;
import java.io.IOException;

public class LineNumberReaderExample {

    public static void main(String[] args) {
        // Ruta del archivo a crear y leer
        String filePath = "sample.txt";

        // Crear el archivo con contenido de ejemplo
        createSampleFile(filePath);

        // Leer el archivo usando LineNumberReader y mostrar su contenido
        readFile(filePath);
    }

    private static void createSampleFile(String filePath) {
        try (FileWriter writer = new FileWriter(filePath)) {
            writer.write("Hola, este es un archivo de ejemplo.\n");
            writer.write("Estamos aprendiendo sobre LineNumberReader.\n");
            writer.write("Cada línea tiene su propio número.\n");
            writer.write("¡Espero que este ejemplo sea útil!");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void readFile(String filePath) {
        try (LineNumberReader lineNumberReader = new LineNumberReader(new FileReader(filePath))) {
            String line;
            while ((line = lineNumberReader.readLine()) != null) {
                // Mostrar el número de línea y el contenido de la línea
                System.out.println("Línea " + lineNumberReader.getLineNumber() + ": " + line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
