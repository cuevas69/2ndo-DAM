//4. Lee los primeros 100 bytes del fichero "imagen.jpg" usando FileInputStream y guárdalos en un array de bytes.
import java.io.FileInputStream;
import java.io.IOException;

public class actividad4 {

    public static void main(String[] args) {
        
        try {
            FileInputStream archivo = new FileInputStream("imagen.jpg");
            
            byte[] buffer = new byte[100];
            int bytesRead = archivo.read(buffer);
            
            archivo.close();
            
            System.out.println("Leío " + bytesRead + " bytes del archivo.");
            
        } catch (IOException e) {
            System.out.println("Error");
            e.printStackTrace();
        }
    }
}