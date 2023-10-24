import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class actividad4 {
    public static void main(String[] args) {
        try {
            // Lanza el proceso para ejecutar el comando "time"
            Process proceso = Runtime.getRuntime().exec("time");

            // Lee la salida del proceso
            BufferedReader reader = new BufferedReader(new InputStreamReader(proceso.getInputStream()));
            String linea;
            while ((linea = reader.readLine()) != null) {
                System.out.println(linea);
            }

            // Obtiene el PID del proceso
            long pid = obtenerPID(proceso);

            // Espera a que el proceso termine y obtiene el código de salida
            int exitCode = proceso.waitFor();

            // Verifica si el proceso se finalizó correctamente
            if (exitCode == 0) {
                System.out.println("El proceso se ha finalizado correctamente.");
            } else {
                System.out.println("El proceso ha finalizado con un código de salida diferente de cero.");
            }

            // Verifica si el proceso sigue activo y lo finaliza si es necesario
            if (verificarProcesoActivo(pid)) {
                proceso.destroy();
                System.out.println("El proceso se ha finalizado correctamente.");
            }

        } catch (IOException | InterruptedException e) {
            e.printStackTrace();
        }
    }

    public static long obtenerPID(Process proceso) {
        String nombreProceso = proceso.toString();
        String[] partes = nombreProceso.split("\\D+");
        return Long.parseLong(partes[1]);
    }

    public static boolean verificarProcesoActivo(long pid) throws IOException {
        Process proceso = Runtime.getRuntime().exec("tasklist");
        BufferedReader reader = new BufferedReader(new InputStreamReader(proceso.getInputStream()));
        String linea;
        while ((linea = reader.readLine()) != null) {
            if (linea.contains(String.valueOf(pid))) {
                return true;
            }
        }
        return false;
    }
}