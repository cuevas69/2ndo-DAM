/*2. Utiliza FileWriter para crear un nuevo fichero llamado "numeros.txt" y
 escribe en él los números del 1 al 10, cada uno en una línea distinta.*/
import java.io.FileWriter;
import java.io.IOException;

public class actividad2 {

    public static void main(String[] args) {
        
        try {
            FileWriter archivo = new FileWriter("numeros.txt");
            
            for (int i = 1; i <= 10; i++) {
                archivo.write(i + "\n");
            }
            
            archivo.close();
            System.out.println("Creado el archivo 'numeros.txt'");
            
        } catch (IOException e) {
            System.out.println("Error");
            e.printStackTrace();
        }
        
    }
}