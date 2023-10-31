package Ejemplo1_DOM;

import java.io.File;
import java.io.IOException;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import javax.xml.transform.OutputKeys;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerException;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;

public class VampirosFamosos {
    private static final String FILENAME = "vampiros.xml";

    public static void main(String[] args) {
        // Crear archivo XML con información de vampiros famosos
        try {
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.newDocument();

            // Crear elemento raíz
            Element rootElement = doc.createElement("vampiros");
            doc.appendChild(rootElement);

            // Crear elementos hijo
            Element vampiro1 = doc.createElement("vampiro");
            rootElement.appendChild(vampiro1);

            // Añadir atributos a los elementos hijo
            vampiro1.setAttribute("nombre", "Drácula");
            vampiro1.setAttribute("lugar", "Transilvania");
            vampiro1.setAttribute("año", "1897");

            Element vampiro2 = doc.createElement("vampiro");
            rootElement.appendChild(vampiro2);

            vampiro2.setAttribute("nombre", "Lestat de Lioncourt");
            vampiro2.setAttribute("lugar", "Francia");
            vampiro2.setAttribute("año", "1976");

            // Escribir documento XML en archivo
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
            transformer.setOutputProperty(OutputKeys.INDENT, "yes"); // Formatear el XML
            DOMSource source = new DOMSource(doc);
            StreamResult result = new StreamResult(new File(FILENAME));
            transformer.transform(source, result);

            System.out.println("Archivo XML creado correctamente.");

        } catch (ParserConfigurationException | TransformerException e) {
            e.printStackTrace();
        }

        // Realizar CRUD con DOM para archivo XML creado
        try {
            File xmlFile = new File(FILENAME);
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(xmlFile);

            // Obtener elemento raíz
            Element rootElement = doc.getDocumentElement();

            // Obtener lista de elementos hijo
            NodeList nodeList = rootElement.getChildNodes();

            // Recorrer lista de elementos hijo
            for (int i = 0; i < nodeList.getLength(); i++) {
                Node node = nodeList.item(i);

                if (node.getNodeType() == Node.ELEMENT_NODE) {
                    Element element = (Element) node;

                    // Realizar operaciones CRUD
                    System.out.println("Nombre: " + element.getAttribute("nombre"));
                    System.out.println("Lugar: " + element.getAttribute("lugar"));
                    System.out.println("Año: " + element.getAttribute("año"));

                    // Actualizar atributos
                    element.setAttribute("lugar", "Rumania");
                    element.setAttribute("año", "1897");

                    // Eliminar elemento
                    if (element.getAttribute("nombre").equals("Lestat de Lioncourt")) {
                        rootElement.removeChild(element);
                    }
                }
            }

            // Escribir cambios en archivo XML
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
            transformer.setOutputProperty(OutputKeys.INDENT, "yes"); // Formatear el XML
            DOMSource source = new DOMSource(doc);
            StreamResult result = new StreamResult(new File(FILENAME));
            transformer.transform(source, result);

            System.out.println("Archivo XML actualizado correctamente.");

        } catch (ParserConfigurationException | IOException | org.xml.sax.SAXException | TransformerException e) {
            e.printStackTrace();
        }
    }
}