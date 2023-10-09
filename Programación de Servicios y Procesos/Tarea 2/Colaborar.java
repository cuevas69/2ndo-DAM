import java.io.FileWriter;
import java.io.IOException;

public class Colaborar {

    public static void main(String[] args) {
        int totalInstancias = 10;
        String salida = "salida.txt";

        try {
            FileWriter escritor = new FileWriter(salida);

            for (int i = 1; i <= totalInstancias; i++) {
                for (int j = 0; j < i * 10; j++) {
                    String letras = generarLetras(j);
                    escritor.write(letras + "\n");
                }
            }

            escritor.close();
            System.out.println("La generación de conjuntos ha finalizado.");
        } catch (IOException e) {
            System.out.println("Error al escribir en el archivo de salida: " + e.getMessage());
        }
    }

    private static String generarLetras(int count) {
        StringBuilder sb = new StringBuilder();

        for (int i = 0; i < count; i++) {
            sb.append((char) ('A' + i % 26));
        }

        return sb.toString();
    }
}
