import java.util.Arrays;
import java.util.Scanner;

public class Ordenador {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Ingrese la cantidad de números a ordenar: ");
        int cantidadNumeros = scanner.nextInt();
        
        int[] numeros = new int[cantidadNumeros];
        
        System.out.println("Ingrese los números uno por uno:");
        for (int i = 0; i < cantidadNumeros; i++) {
            numeros[i] = scanner.nextInt();
        }

        for (int i = 0; i < cantidadNumeros - 1; i++) {
            for (int j = 0; j < cantidadNumeros - i - 1; j++) {
                if (numeros[j] > numeros[j + 1]) {
                    int temp = numeros[j];
                    numeros[j] = numeros[j + 1];
                    numeros[j + 1] = temp;
                }
            }
        }
        
        System.out.println("Array ordenado:");
        System.out.println(Arrays.toString(numeros));
    }
}
