import java.io.FileWriter;
import java.io.IOException;
import java.util.Random;

public class Scout {
    public static void main(String[] args) {
        if (args.length != 2) {
            System.out.println("Error");
            System.out.println("Ejemplo de uso: java -jar scout.jar 50 informes.txt");
            return;
        }

        int numInformes = Integer.parseInt(args[0]);
        String nombreArchivo = args[1];

        try {
            FileWriter escritor = new FileWriter(nombreArchivo);

            for (int i = 0; i < numInformes; i++) {
                String informe = generarInformeScouting();
                escritor.write(informe + "\n");
            }

            escritor.close();
            System.out.println("Se generaron " + numInformes + " informes en el archivo " + nombreArchivo);
        } catch (IOException e) {
            System.out.println("Error");
            e.printStackTrace();
        }
    }

    private static String generarInformeScouting() {
        
        String nombreJugador = generarNombreAleatorio();
        int edad = generarEdadAleatoria();
        String posicion = generarPosicionAleatoria();

        String informe = "Nombre: " + nombreJugador + ", Edad: " + edad + ", Posición: " + posicion;

        return informe;
    }

    private static String generarNombreAleatorio() {

        String[] nombres = {"Ronaldo", "Messi", "Casillas", "Pedro", "Xavi", "Iniesta", "Federico", "Higuain", "Aduriz", "Mbappe", "Kounde",
                            "Haaland", "Federico", "Muniain", "Munitis", "Jose David", "Marcos", "Jose Joaquin", "Juan Jesus"};

        Random random = new Random();
        int index = random.nextInt(nombres.length);

        return nombres[index];
    }

    private static int generarEdadAleatoria() {

        Random random = new Random();
        return random.nextInt(21) + 18;
    }

    private static String generarPosicionAleatoria() {

        String[] posiciones = {"Delantero", "Mediocampo", "Defensa", "Portero"};

        Random random = new Random();
        int index = random.nextInt(posiciones.length);

        return posiciones[index];
    }
}