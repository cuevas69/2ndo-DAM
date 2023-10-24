public class actividad3 {
    public static void main(String[] args) {
        if (args.length == 2) {
            int numero1 = Integer.parseInt(args[0]);
            int numero2 = Integer.parseInt(args[1]);

            int resultado = sumaNumeros(numero1, numero2);
            System.out.println("La suma de los números entre " + numero1 + " y " + numero2 + " es: " + resultado);
        } else {
            System.out.println("Debes proporcionar dos números como argumentos.");
        }

        // Destruye el proceso
        System.exit(0);
    }

    public static int sumaNumeros(int num1, int num2) {
        int suma = 0;
        for (int i = num1 + 1; i < num2; i++) {
            suma += i;
        }
        return suma;
    }
}
