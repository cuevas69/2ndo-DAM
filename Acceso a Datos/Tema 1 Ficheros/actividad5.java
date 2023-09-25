//5. Usa RandomAccessFile para posicionar el puntero en el byte 50 de "fichero.dat" 
//y lee los 10 bytes siguientes en un array.
import java.io.RandomAccessFile;
import java.io.IOException;

public class actividad5 {
    public static void main(String[] args) {
        try {
            RandomAccessFile archivo = new RandomAccessFile("fichero.dat", "rw");
            
            archivo.seek(50);
            
            byte[] array = new byte[10];
            archivo.read(array);
            
            for (byte b : array) {
                System.out.print(b + " ");
            }
            archivo.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}