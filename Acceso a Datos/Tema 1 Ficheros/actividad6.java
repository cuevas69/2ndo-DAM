//6. Crea un BufferedReader para mejorar el rendimiento de la lectura del fichero "grande.txt".
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;

public class actividad6 {
    public static void main(String[] args) {
        try {
            BufferedReader br = new BufferedReader(new FileReader("grande.txt"));
            
            String linea;
            
            while ((linea = br.readLine()) != null) {
                System.out.println(linea);
            }
            br.close();

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}