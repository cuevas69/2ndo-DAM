package Ejemplo3_JUnit;

import static org.junit.Assert.*;
import org.junit.Test;

public class OperacionesMatematicasTest {
    @Test
    public void testFactorial() {
      
      OperacionesMatematicas op = new OperacionesMatematicas();
      int resultado = op.factorial(5);
      
      assertEquals(120, resultado);
    }
}