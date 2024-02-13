import java.io.IOException;
import java.net.ServerSocket;
import java.net.Socket;

public class Server implements Runnable {
    @Override
    public void run() {
        try (ServerSocket serverSocket = new ServerSocket(12345)) {
            while (true) {
                // Esperar a que llegue una conexión
                Socket clientSocket = serverSocket.accept();

                // Procesar la conexión en un hilo separado
                Thread clientThread = new Thread(new ClientHandler(clientSocket));
                clientThread.start();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
