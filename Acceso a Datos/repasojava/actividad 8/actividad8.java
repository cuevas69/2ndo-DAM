// 8. Utilización avanzada de clases:
// – Diseña una clase "Vehículo" con atributos básicos como marca y modelo.
// Luego, crea una clase "Coche" que herede de "Vehículo" y añade atributos
// específicos como número de puertas. Instancia objetos de ambas clases y
// muestra sus detalles.

public class actividad8 {
    public static void main(String[] args) {
        Vehiculo vehiculo = new Vehiculo("Toyota", "Corolla");
        Coche coche = new Coche("Ford", "Focus", 4);

        System.out.println("Detalles del Vehículo:");
        System.out.println(vehiculo);

        System.out.println("\nDetalles del Coche:");
        System.out.println(coche);
    }
}

