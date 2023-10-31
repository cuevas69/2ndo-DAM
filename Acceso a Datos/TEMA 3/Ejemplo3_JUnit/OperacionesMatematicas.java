package Ejemplo3_JUnit;

public class OperacionesMatematicas {

  public int factorial(int numero){
    int resultado = 1;
    for (int i = 1; i <= numero; i++){
      resultado *= i;
    }
    return resultado;
  }

}