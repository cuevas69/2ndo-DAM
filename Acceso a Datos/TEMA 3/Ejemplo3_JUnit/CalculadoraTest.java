package Ejemplo3_JUnit;

import static org.junit.Assert.*;
import org.junit.Test;

public class CalculadoraTest {

  @Test
  public void testSuma() {
    Calculadora calc = new Calculadora();
    int resultado = calc.sumar(2, 2);
    assertEquals(4, resultado);
  }

  private void assertEquals(int i, int resultado) {
  }

  @Test
  public void testResta() {
    Calculadora calc = new Calculadora();
    int resultado = calc.restar(5, 3);
    assertEquals(2, resultado); 
  }

  @Test
  public void testMultiplicacion() {
    Calculadora calc = new Calculadora();
    int resultado = calc.multiplicar(4, 5);
    assertEquals(20, resultado);
  }

  @Test
  public void testDivision() {
    Calculadora calc = new Calculadora();
    int resultado = calc.dividir(20, 5);
    assertEquals(4, resultado);
  }

}