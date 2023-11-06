package target.classes;
import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.util.ArrayList;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.transform.Transformer;
import javax.xml.transform.TransformerFactory;
import javax.xml.transform.dom.DOMSource;
import javax.xml.transform.stream.StreamResult;
import org.w3c.dom.Attr;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.w3c.dom.NamedNodeMap;

public class analisis {
    public static void main(String[] args) {
        try {
            // Cargar el archivo XML
            File archivoXML = new File("marcadores.xml");
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(archivoXML);
            
            // Crear una lista para mantener la jerarquía de nodos
            ArrayList<String> jerarquia = new ArrayList<>();
            
            // Crear el documento de salida
            Document outputDoc = dBuilder.newDocument();
            Element rootElement = outputDoc.createElement("resultados");
            outputDoc.appendChild(rootElement);
            
            // Obtener el elemento raíz del XML
            Element root = doc.getDocumentElement();
            NodeList nodeList = root.getChildNodes();
            listarNodos(nodeList, jerarquia, rootElement, outputDoc);
            
            // Crear un archivo XML formateado con la salida
            TransformerFactory transformerFactory = TransformerFactory.newInstance();
            Transformer transformer = transformerFactory.newTransformer();
            transformer.setOutputProperty("indent", "yes");
            DOMSource source = new DOMSource(outputDoc);
            OutputStream os = new FileOutputStream("salida.xml");
            StreamResult result = new StreamResult(os);
            transformer.transform(source, result);
            
            System.out.println("Análisis completo. La salida se ha guardado en 'salida.xml'");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    // Método recursivo para listar nodos y construir la jerarquía
    private static void listarNodos(NodeList nodeList, ArrayList<String> jerarquia, Element parentElement, Document outputDoc) {
        for (int i = 0; i < nodeList.getLength(); i++) {
            Node currentNode = nodeList.item(i);
            if (currentNode.getNodeType() == Node.ELEMENT_NODE) {
                Element currentElement = (Element) currentNode;
                
                // Agregar el nombre del nodo a la jerarquía
                jerarquia.add(currentElement.getNodeName());
                
                // Crear un nuevo elemento en el documento de salida
                Element newElement = outputDoc.createElement(currentElement.getNodeName());
                
                // Copiar los atributos al nuevo elemento
                NamedNodeMap attributes = currentElement.getAttributes();
                for (int j = 0; j < attributes.getLength(); j++) {
                    Attr attribute = (Attr) attributes.item(j);
                    newElement.setAttribute(attribute.getName(), attribute.getValue());
                }
                
                // Verificar si es un nodo "competicion"
                if (currentElement.getNodeName().equals("competicion")) {
                    // Mostrar los atributos "id" y "nombre"
                    String id = currentElement.getAttribute("id");
                    String nombre = currentElement.getAttribute("nombre");
                    System.out.println("Nodo 'competicion' - id: " + id + ", nombre: " + nombre);
                }
                
                // Agregar el nuevo elemento como hijo del padre en el documento de salida
                parentElement.appendChild(newElement);
                
                // Llamar al método recursivamente para los hijos
                listarNodos(currentNode.getChildNodes(), jerarquia, newElement, outputDoc);
                
                // Eliminar el último elemento de la jerarquía
                jerarquia.remove(jerarquia.size() - 1);
            }
        }
    }
}
