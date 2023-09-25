/*1. Introducción a la programación y elementos de un programa informático:
– Escribe un programa que solicite al usuario su nombre y edad, y muestre
un mensaje de bienvenida. Asegúrate de utilizar variables, constantes y
comentarios en tu código.*/

import java.util.Scanner;

public class actividad1 {
    public static void main(String[] args) {
        // Scanner para la entrada del usuario
        Scanner scanner = new Scanner(System.in);
        
        // Nombre
        System.out.print("Introduce tu nombre: ");
        String nombre = scanner.nextLine();
        
        // Edad
        System.out.print("Introduce tu edad: ");
        int edad = scanner.nextInt();
        
        // Mensaje de bienvenida
        System.out.println("Hola, " + nombre + " de " + edad + " años.");
        
        // Cerrar el objeto Scanner
        scanner.close();
    }
}