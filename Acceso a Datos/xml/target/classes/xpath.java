package target.classes;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathExpressionException;
import javax.xml.xpath.XPathFactory;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;
import java.util.Scanner;

public class xpath {
    public static void main(String[] args) {
        try {
            // Crear un objeto Scanner para leer desde la entrada estándar (consola)
            Scanner scanner = new Scanner(System.in);
            System.out.print("Ingrese el nombre del equipo: ");
            String equipoBuscado = scanner.nextLine();
            scanner.close();  // Cerrar el Scanner después de la entrada del usuario

            // Crear un objeto DocumentBuilderFactory para construir un analizador DOM
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();
            
            // Analizar el archivo XML utilizando el analizador DOM
            Document doc = builder.parse("marcadores.xml");

            // Crear una fábrica y un objeto XPath para evaluar expresiones XPath
            XPathFactory xPathfactory = XPathFactory.newInstance();
            XPath xpath = xPathfactory.newXPath();
            
            // Usar una expresión XPath para encontrar eventos con el equipo local o visitante igual al equipo buscado
            XPathExpression expr = xpath.compile("//evento[equipolocal='" + equipoBuscado + "' or equipovisitante='" + equipoBuscado + "']");
            
            // Evaluar la expresión XPath en el documento XML
            NodeList nodes = (NodeList) expr.evaluate(doc, XPathConstants.NODESET);

            // Recorrer los nodos resultantes e imprimir la información de los eventos
            for (int i = 0; i < nodes.getLength(); i++) {
                Element evento = (Element) nodes.item(i);
                String fecha = evento.getElementsByTagName("fecha").item(0).getTextContent();
                String equipoLocal = evento.getElementsByTagName("equipolocal").item(0).getTextContent();
                String equipoVisitante = evento.getElementsByTagName("equipovisitante").item(0).getTextContent();
                String resultadoLocal = evento.getElementsByTagName("resultadolocal").item(0).getTextContent();
                String resultadoVisitante = evento.getElementsByTagName("resultadovisitante").item(0).getTextContent();

                // Imprimir información del evento
                System.out.println("Fecha: " + fecha);
                System.out.println("Equipo Local: " + equipoLocal);
                System.out.println("Equipo Visitante: " + equipoVisitante);
                System.out.println("Resultado: " + resultadoLocal + " - " + resultadoVisitante);
                System.out.println();
            }
        } catch (Exception e) {
            e.printStackTrace(); // Manejo de excepciones: imprimir la traza de la excepción
        }
    }
}
