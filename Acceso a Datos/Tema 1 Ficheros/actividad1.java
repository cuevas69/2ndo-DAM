//1. Instancia un objeto File para el fichero "datos.txt" e imprime por pantalla su ruta absoluta.
import java.io.File;

public class actividad1 {
    public static void main(String[] args) {
        String nombreArchivo = "datos.txt";

        File archivo = new File(nombreArchivo);

        String rutaAbsoluta = archivo.getAbsolutePath();

        System.out.println("La ruta absoluta del archivo es: " + rutaAbsoluta);
    }
}