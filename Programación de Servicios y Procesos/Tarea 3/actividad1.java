import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;

public class actividad1 {
    public static void main(String[] args) {
        try {
            // Abrir Google Chrome
            String comando = "C:\\Users\\Alumno1\\AppData\\Local\\Google\\Chrome\\Application\\chrome.exe";
            
            // Crear el proceso usando ProcessBuilder
            ProcessBuilder builder = new ProcessBuilder(comando);
            Process proceso = builder.start();
            
            // Obtener el PID del proceso abierto
            long pid = obtenerPIDDelProceso(proceso);
            System.out.println("El PID del proceso de Chrome es: " + pid);

            // Esperar un tiempo (puedes hacer que tu programa espere aquí)
            Thread.sleep(5000);

            // Comprobar si el proceso está vivo usando "tasklist"
            if (esProcesoActivo(pid)) {
                System.out.println("El proceso de Chrome sigue vivo.");
                
                // Detener el proceso por consola utilizando "taskkill"
                detenerProceso(pid);
                System.out.println("El proceso de Chrome ha sido detenido.");
            } else {
                System.out.println("El proceso de Chrome ya no está vivo.");
            }
        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

    private static long obtenerPIDDelProceso(Process proceso) {
        // Obtener el PID del proceso
        return proceso.pid();
    }

    private static boolean esProcesoActivo(long pid) throws IOException {
        // Ejecutar "tasklist" para obtener la lista de procesos
        ProcessBuilder builder = new ProcessBuilder("tasklist");
        Process procesoTasklist = builder.start();

        // Leer la salida del comando "tasklist"
        InputStream inputStream = procesoTasklist.getInputStream();
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        String line;
        while ((line = reader.readLine()) != null) {
            if (line.contains("chrome.exe")) {
                return true;
            }
        }
        return false;
    }

    private static void detenerProceso(long pid) throws IOException {
        // Detener el proceso usando "taskkill"
        String comandoTaskkill = "taskkill /F /PID " + pid;
        ProcessBuilder builder = new ProcessBuilder("cmd.exe", "/c", comandoTaskkill);
        builder.start();
    }
}
