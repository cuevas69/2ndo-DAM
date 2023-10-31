package Ejemplo1_DOM;

import static org.junit.Assert.assertTrue;

import java.io.File;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.junit.Test;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.NodeList;

public class VampirosFamososTest {

  private static final String FILENAME = "vampiros.xml";
  
  @Test
  public void testCrearXML() {
  
    try {
      // Llamada al método estático que crea el archivo XML
      VampirosFamosos.main(null);
      
      // Verificar que el archivo XML fue creado
      File xmlFile = new File(FILENAME);
      assertTrue(xmlFile.exists());
      
    } catch (Exception e) {
      e.printStackTrace();
    }

  }
  
  @Test
  public void testActualizarXML() {
    
    try {
      
      // Primero creamos el archivo XML de prueba
      testCrearXML();
      
      // Parsear el archivo XML
      DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
      DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
      Document doc = dBuilder.parse(FILENAME);

      // Obtener el nodo raíz
      Element rootElement = doc.getDocumentElement();

      // Verificar número inicial de elementos hijo (vampiros)
      NodeList nodes = rootElement.getChildNodes();
      int numVampirosInicial = nodes.getLength();
      
      // Llamada al método estático que actualiza el archivo
      VampirosFamosos.main(null);
      
      // Volver a parsear el XML
      doc = dBuilder.parse(FILENAME);  
      rootElement = doc.getDocumentElement();
      nodes = rootElement.getChildNodes();

      // Verificar que el número de elementos hijo cambió
      int numVampirosFinal = nodes.getLength();
      assertTrue(numVampirosInicial != numVampirosFinal);
      
    } catch (Exception e) {
      e.printStackTrace();
    }

  }
  
}