// 5. Uso de estructuras de control avanzadas:
// – Desarrolla un programa que utilice estructuras de repetición para mostrar
// los primeros 10 números de la serie Fibonacci.

public class Fibonacci {
    public static void main(String[] args) {
        int serie = 10, num1 = 0, num2 = 1, suma = 1;
 
        // Mostrar el valor inicial
        System.out.println(num1);
         
        for (int i = 1; i < serie; i++) {
             
            // Mostrar la suma
            System.out.println(suma);

            // Suma
            suma = num1 + num2;
            // Cambiar la segunda variable por la primera
            num1 = num2;
            // Cambiar la suma por la segunda variable
            num2 = suma;
        }
    }
}
