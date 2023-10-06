import java.io.*;
import java.util.Scanner;

public class PipedStreamsExample {

    public static void main(String[] args) {
        try {
            // Inicialización de los flujos
            final PipedOutputStream salida = new PipedOutputStream();
            final PipedInputStream entrada = new PipedInputStream(salida);

            // Hilo 1: Productor - Escribe datos en el PipedOutputStream
            Thread thread1 = new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        Scanner scanner = new Scanner(System.in);
                        String userInput;
                        do {
                            System.out.println("Introduce el texto que deseas enviar (finaliza con 'Viva Java'):");
                            userInput = scanner.nextLine();
                            salida.write(userInput.getBytes());
                            salida.write('\n'); // Para enviar el salto de línea
                        } while (!userInput.equals("Viva Java"));
                        salida.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            });

            // Hilo 2: Consumidor - Lee datos desde el PipedInputStream
            Thread thread2 = new Thread(new Runnable() {
                @Override
                public void run() {
                    try {
                        int unByte;
                        System.out.println("Texto recibido:");
                        while ((unByte = entrada.read()) != -1) {
                            System.out.print((char) unByte);
                        }
                        entrada.close();
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                }
            });

            // Inicio de los hilos
            thread1.start();
            thread2.start();

            // Esperar a que ambos hilos finalicen
            thread1.join();
            thread2.join();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
