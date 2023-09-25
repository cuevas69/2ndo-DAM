// 3. Lee el fichero "numeros.txt" con FileReader y muestra su contenido por pantalla.
import java.io.FileReader;
import java.io.BufferedReader;
import java.io.IOException;

public class actividad3 {

    public static void main(String[] args) {
        
        try {
            FileReader archivo = new FileReader("numeros.txt");
            BufferedReader leerArchivo = new BufferedReader(archivo);
            
            String contenido;
            while ((contenido = leerArchivo.readLine()) != null) {
                System.out.println(contenido);
            }
            leerArchivo.close();

        } catch (IOException e) {
            System.out.println("Error");
            e.printStackTrace();
        }
    }
}