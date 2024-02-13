import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Main {
    public static void main(String[] args) {
        // Crear un pool de hilos con 5 threads
        ExecutorService threadPool = Executors.newFixedThreadPool(5);

        // Iniciar el servidor central en un hilo separado
        Thread serverThread = new Thread(new Server());
        serverThread.start();

        // Simular la entrada y salida de trabajadores
        for (int i = 1; i <= 10; i++) {
            Worker worker = new Worker("Trabajador " + i);
            threadPool.execute(worker);
        }

        // Apagar el pool de hilos después de completar todas las tareas
        threadPool.shutdown();
    }
}
