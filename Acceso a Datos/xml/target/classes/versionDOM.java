package target.classes;
import java.io.File;
import java.util.Scanner;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

public class versionDOM {
    public static void main(String[] args) {
        try {
            // Crear un objeto Scanner para leer desde la entrada estándar (consola)
            Scanner scanner = new Scanner(System.in);
            System.out.print("Ingrese el nombre del equipo: ");
            String equipoBuscado = scanner.nextLine();
            scanner.close();  // Cerrar el Scanner después de la entrada del usuario

            // Cargar el archivo XML
            File archivoXML = new File("marcadores.xml");
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(archivoXML);

            // Obtener el elemento raíz del documento XML
            Element root = doc.getDocumentElement();

            // Obtener una lista de elementos 'evento' del documento
            NodeList eventos = root.getElementsByTagName("evento");

            // Iterar a través de la lista de eventos
            for (int i = 0; i < eventos.getLength(); i++) {
                // Obtener el elemento 'evento' en la posición actual
                Element evento = (Element) eventos.item(i);

                // Obtener los elementos 'equipolocal' y 'equipovisitante'
                Element equipoLocal = (Element) evento.getElementsByTagName("equipolocal").item(0);
                Element equipoVisitante = (Element) evento.getElementsByTagName("equipovisitante").item(0);

                // Obtener los nombres de los equipos local y visitante
                String nombreEquipoLocal = equipoLocal.getTextContent();
                String nombreEquipoVisitante = equipoVisitante.getTextContent();

                // Comprobar si el equipo buscado coincide con el equipo local o visitante
                if (nombreEquipoLocal.equals(equipoBuscado) || nombreEquipoVisitante.equals(equipoBuscado)) {
                    // Obtener información adicional del evento
                    String fecha = evento.getElementsByTagName("fecha").item(0).getTextContent();
                    String resultadoLocal = evento.getElementsByTagName("resultadolocal").item(0).getTextContent();
                    String resultadoVisitante = evento.getElementsByTagName("resultadovisitante").item(0).getTextContent();

                    // Imprimir la información del evento
                    System.out.println("Fecha: " + fecha);
                    System.out.println("Equipo Local: " + nombreEquipoLocal);
                    System.out.println("Equipo Visitante: " + nombreEquipoVisitante);
                    System.out.println("Resultado: " + resultadoLocal + " - " + resultadoVisitante);
                    System.out.println();
                }
            }
        } catch (Exception e) {
            e.printStackTrace(); // Manejo de excepciones: imprimir la traza de la excepción
        }
    }
}
