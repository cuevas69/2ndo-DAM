import java.util.Scanner;

public class actividad2 {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("i¡Introduce un número: ");
        int numero = scanner.nextInt();
        
        // Determinar si el número es par o impar
        if (numero % 2 == 0) {
            System.out.println(numero + " es un número par.");
        } else {
            System.out.println(numero + " es un número impar.");
        }

        scanner.close();
    }
}