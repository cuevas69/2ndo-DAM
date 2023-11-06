import static org.junit.Assert.assertEquals;
import org.junit.Test;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.PrintStream;

public class VersionDOMTest {

    @Test
    public void testDOM() {
        // Simula la entrada de usuario proporcionando una cadena para "equipoBuscado"
        String input = "Betis";
        
        // Crea un flujo de entrada falso para simular la entrada del usuario
        ByteArrayInputStream in = new ByteArrayInputStream(input.getBytes());
        System.setIn(in);

        // Llama al método main de la clase VersionDOM y captura su salida
        ByteArrayOutputStream outContent = new ByteArrayOutputStream();
        System.setOut(new PrintStream(outContent));
        versionDOM.main(null);

        // Define la salida esperada para compararla con la salida real
        String expectedOutput = "Fecha: ..."; 

        // Compara la salida esperada con la salida real
        assertEquals(expectedOutput.trim(), outContent.toString().trim());
    }
}
