import java.util.Scanner;

public class main {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Introduce tu nombre: ");
        String nombre = scanner.nextLine();

        System.out.print("Introduce tu edad: ");
        int edad = scanner.nextInt();
        scanner.nextLine();

        System.out.print("Introduce tu peso: ");
        double peso = scanner.nextDouble();

        System.out.print("Introduce tu altura: ");
        double altura = scanner.nextDouble(); 
        
        System.out.println("Introduce el sexo (H o M): ");
        char sexo = scanner.nextLine().charAt(0);

        Persona persona1 = new Persona(nombre, edad, sexo, peso, altura);
        Persona persona2 = new Persona(nombre, edad, sexo);
        Persona persona3 = new Persona();

        persona3.setNombre("Persona por defecto");
        persona3.setEdad(30);
        persona3.setSexo('H');
        persona3.setPeso(70);
        persona3.setAltura(1.80);

        System.out.println(persona1);
        System.out.println(persona2);
        System.out.println(persona3);

        System.out.println("Persona 1 tiene sobrepeso: " + (persona1.calcularIMC() == 1));
        System.out.println("Persona 2 tiene sobrepeso: " + (persona2.calcularIMC() == 1));
        System.out.println("Persona 3 tiene sobrepeso: " + (persona3.calcularIMC() == 1));

        System.out.println("Persona 1 es mayor de edad: " + persona1.mayorEdad());
        System.out.println("Persona 2 es mayor de edad: " + persona2.mayorEdad());
        System.out.println("Persona 3 es mayor de edad: " + persona3.mayorEdad());
    }  
}