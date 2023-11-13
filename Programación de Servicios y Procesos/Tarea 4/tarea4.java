import java.util.concurrent.ArrayBlockingQueue;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

class Almacen {
    private ArrayBlockingQueue<Character> buffer = new ArrayBlockingQueue<>(6);

    public void producir() {
        try {
            for (int i = 0; i < 15; i++) {
                char dato = (char) ('A' + i % 26);
                buffer.put(dato);
                System.out.println("Productor produce: " + dato);
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }

    public void consumir() {
        try {
            for (int i = 0; i < 15; i++) {
                char dato = buffer.take();
                System.out.println("Consumidor consume: " + dato);
                Thread.sleep(1000);
            }
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
    }
}

public class tarea4 {
    public static void main(String[] args) {
        Almacen almacen = new Almacen();
        ExecutorService executorService = Executors.newFixedThreadPool(2);

        executorService.execute(() -> almacen.producir());
        executorService.execute(() -> almacen.consumir());

        executorService.shutdown();
    }
}
