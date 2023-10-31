package Ejemplo2_SAX;

import org.xml.sax.Attributes;
import org.xml.sax.SAXException;
import org.xml.sax.helpers.DefaultHandler;
import javax.xml.parsers.SAXParser;
import javax.xml.parsers.SAXParserFactory;
import java.io.File;
import java.io.IOException;

public class VampirosFamososSAX {
    private static final String FILENAME = "vampiros.xml";

    public static void main(String[] args) {
        try {
            // Crear instancia de SAXParserFactory y SAXParser
            SAXParserFactory factory = SAXParserFactory.newInstance();
            SAXParser saxParser = factory.newSAXParser();

            // Crear instancia de DefaultHandler para manejar los eventos SAX
            DefaultHandler handler = new DefaultHandler() {
                boolean isVampiro = false; // Indica si se encuentra dentro de un elemento "vampiro"

                // Método que se ejecuta cuando se encuentra el inicio de un elemento
                public void startElement(String uri, String localName, String qName, Attributes attributes) throws SAXException {
                    if (qName.equalsIgnoreCase("vampiro")) {
                        isVampiro = true;
                        System.out.println("Nombre: " + attributes.getValue("nombre"));
                        System.out.println("Lugar: " + attributes.getValue("lugar"));
                        System.out.println("Año: " + attributes.getValue("año"));
                    }
                }

                // Método que se ejecuta cuando se encuentra el final de un elemento
                public void endElement(String uri, String localName, String qName) throws SAXException {
                    if (qName.equalsIgnoreCase("vampiro")) {
                        isVampiro = false;
                    }
                }
            };

            // Leer el archivo XML utilizando SAXParser y el DefaultHandler personalizado
            saxParser.parse(new File(FILENAME), handler);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}