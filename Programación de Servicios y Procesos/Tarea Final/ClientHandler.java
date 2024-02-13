import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.Socket;

public class ClientHandler implements Runnable {
    private Socket clientSocket;

    public ClientHandler(Socket clientSocket) {
        this.clientSocket = clientSocket;
    }

    @Override
    public void run() {
        try {
            // Configurar un lector de entrada para recibir datos del cliente
            BufferedReader reader = new BufferedReader(new InputStreamReader(clientSocket.getInputStream()));

            // Leer los registros de entrada y procesarlos
            String line;
            while ((line = reader.readLine()) != null) {
                System.out.println("Registro recibido en el servidor: " + line);
                // Aquí puedes realizar el procesamiento y almacenamiento real de los registros.
            }

            // Cerrar la conexión después de leer todos los registros
            clientSocket.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
