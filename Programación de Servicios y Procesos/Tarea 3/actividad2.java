import java.io.IOException;

public class actividad2 {
    public static void main(String[] args) {
        try {
            // Comando para abrir Google Chrome en Windows
            String comando = "C:\\Users\\Alumno1\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe";

            // Ejecuta el comando para abrir Google Chrome
            Runtime.getRuntime().exec(comando);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
