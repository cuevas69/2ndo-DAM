import java.io.FileWriter;
import java.io.FileReader;
import java.io.PushbackReader;
import java.io.IOException;

public class PushbackExample {

    public static void main(String[] args) {
        // Crear el archivo .txt con contenido mixto
        createSampleFile();

        // Analizar el archivo usando PushbackReader
        analyzeFile();
    }

    private static void createSampleFile() {
        try (FileWriter writer = new FileWriter("pruebas2.txt")) {
            writer.write("abc123def456ghi789");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    private static void analyzeFile() {
        try {
            PushbackReader pushbackReader = new PushbackReader(new FileReader("pruebas2.txt"));
            
            int data;
            while ((data = pushbackReader.read()) != -1) {
                if (Character.isDigit((char) data)) {
                    // Si es un dígito, "devolvemos" el carácter y leemos el número completo
                    pushbackReader.unread(data);
                    System.out.println(readNumber(pushbackReader));
                } else {
                    System.out.println((char) data);
                }
            }
            
            pushbackReader.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    // Función auxiliar para leer un número completo
    private static int readNumber(PushbackReader reader) throws IOException {
        StringBuilder number = new StringBuilder();
        int data;
        while ((data = reader.read()) != -1 && Character.isDigit((char) data)) {
            number.append((char) data);
        }
        // "Devolvemos" el último carácter leído que no es un dígito
        if (data != -1) {
            reader.unread(data);
        }
        return Integer.parseInt(number.toString());
    }
}
