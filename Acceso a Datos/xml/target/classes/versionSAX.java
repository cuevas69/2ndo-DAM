package target.classes;
import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.util.Scanner;

public class versionSAX {
    public static void main(String[] args) {
        try {
            // Crear un objeto Scanner para leer desde la entrada estándar (consola)
            Scanner scanner = new Scanner(System.in);
            System.out.print("Ingrese el nombre del equipo: ");
            String equipoBuscado = scanner.nextLine();
            scanner.close();  // Cerrar el Scanner después de la entrada del usuario

            // Crear una fábrica y un analizador SAX
            SAXParserFactory factory = SAXParserFactory.newInstance();
            SAXParser saxParser = factory.newSAXParser();

            // Crear un controlador de eventos para manejar los eventos SAX
            DefaultHandler handler = new DefaultHandler() {
                String equipoLocal = "";
                String equipoVisitante = "";
                String fecha = "";
                String resultado = "";
                boolean dentroEvento = false;

                // Método llamado cuando se encuentra un elemento de inicio (<...>)
                public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
                    if (qName.equals("evento")) {
                        dentroEvento = true;
                    }
                }

                // Método llamado cuando se encuentra un elemento de cierre (</...>)
                public void endElement(String uri, String localName, String qName) throws SAXException {
                    if (qName.equals("evento")) {
                        dentroEvento = false;
                        if (equipoLocal.equals(equipoBuscado) || equipoVisitante.equals(equipoBuscado)) {
                            // Imprimir información del evento
                            System.out.println("Fecha: " + fecha);
                            System.out.println("Equipo Local: " + equipoLocal);
                            System.out.println("Equipo Visitante: " + equipoVisitante);
                            System.out.println("Resultado: " + resultado);
                            System.out.println();
                        }
                        // Restablecer las variables para el siguiente evento
                        equipoLocal = "";
                        equipoVisitante = "";
                        fecha = "";
                        resultado = "";
                    }
                }

                // Método llamado cuando se encuentran caracteres dentro de un elemento
                public void characters(char[] ch, int start, int length) throws SAXException {
                    if (dentroEvento) {
                        String value = new String(ch, start, length).trim();
                        if (!value.isEmpty()) {
                            if (fecha.isEmpty()) {
                                fecha = value;
                            } else if (equipoLocal.isEmpty()) {
                                equipoLocal = value;
                            } else if (equipoVisitante.isEmpty()) {
                                equipoVisitante = value;
                            } else {
                                resultado = equipoLocal + " - " + equipoVisitante;
                            }
                        }
                    }
                }
            };

            // Analizar el archivo XML utilizando el controlador de eventos
            saxParser.parse("marcadores.xml", handler);
        } catch (Exception e) {
            e.printStackTrace(); // Manejo de excepciones: imprimir la traza de la excepción
        }
    }
}
