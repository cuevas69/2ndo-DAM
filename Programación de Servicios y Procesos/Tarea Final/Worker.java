import java.util.Date;

public class Worker implements Runnable {
    private String name;

    public Worker(String name) {
        this.name = name;
    }

    @Override
    public void run() {
        // Simular la entrada del trabajador
        logEvent("Entrada");

        // Simular alguna actividad
        try {
            Thread.sleep((long) (Math.random() * 3000));
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // Simular la salida del trabajador
        logEvent("Salida");
    }

    private void logEvent(String eventType) {
        String logMessage = String.format("[%s] %s - %s", new Date(), name, eventType);
        System.out.println(logMessage);
    }
}

