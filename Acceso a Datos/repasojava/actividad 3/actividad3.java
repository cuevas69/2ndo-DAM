// 3. Estructuras de almacenamiento:
// – Crea un programa que permita al usuario introducir una serie de números
// en un array. Posteriormente, el programa deberá mostrar el número mayor,
// el menor y el promedio de los números introducidos.

import java.util.Scanner;

public class actividad3 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        // Solicitar la cantidad de números
        System.out.print("¿Cuántos números deseas introducir? ");
        int cantidadDeNumeros = scanner.nextInt();
        
        // Crear un array para almacenar los números
        double[] numeros = new double[cantidadDeNumeros];
        
        // Introduzca los números y guardarlos en el array
        for (int i = 0; i < cantidadDeNumeros; i++) {
            System.out.print("Introduce el número " + (i + 1) + ": ");
            numeros[i] = scanner.nextDouble();
        }
        
        // Encontrar el número mayor, el menor y calcular el promedio
        double numeroMayor = numeros[0];
        double numeroMenor = numeros[0];
        double suma = 0;
        
        for (int i = 0; i < cantidadDeNumeros; i++) {
            if (numeros[i] > numeroMayor) {
                numeroMayor = numeros[i];
            }
            
            if (numeros[i] < numeroMenor) {
                numeroMenor = numeros[i];
            }
            
            suma += numeros[i];
        }
        
        double promedio = suma / cantidadDeNumeros;
        
        // Mostrar los resultados
        System.out.println("Número mayor: " + numeroMayor);
        System.out.println("Número menor: " + numeroMenor);
        System.out.println("Promedio: " + promedio);
        
        // Cerrar el objeto Scanner
        scanner.close();
    }
}