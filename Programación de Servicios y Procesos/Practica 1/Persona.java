import java.util.Random;

public class Persona {
    private String nombre;
    private int edad;
    private String dni;
    private char sexo;
    private double peso;
    private double altura;

    private static final char sexoDefault = 'H';

    public Persona() {
        this("", 0, sexoDefault, 0, 0);
    }

    public Persona(String nombre, int edad, char sexo) {
        this(nombre, edad, sexo, 0, 0);
    }

    public Persona(String nombre, int edad, char sexo, double peso, double altura) {
        this.nombre = nombre;
        this.edad = edad;
        this.sexo = sexo;
        this.peso = peso;
        this.altura = altura;
        generarDNI();
    }

    public boolean mayorEdad() {
        return edad >= 18;
    }

    public void generarDNI() {
        Random random = new Random();
        StringBuilder dni = new StringBuilder();

        for (int i = 0; i < 8; i++) {
            dni.append(random.nextInt(10));
        }
        
        int indiceLetra = random.nextInt(23);
        char letra = "TRWAGMYFPDXBNJZSQVHLCKE".charAt(indiceLetra);
        dni.append(letra);
        
        this.dni = dni.toString();
    }

    @Override
    public boolean equals(Object obj) {
        if (obj instanceof Persona) {
            Persona otraPersona = (Persona) obj;
            return dni.equals(otraPersona.dni);
        } else {
            return false;
        }
    }

    public double calcularIMC() {
        double imc = peso / Math.pow(altura, 2);
        
        if (imc < 20) {
            return -1;
        } else if (imc >= 20 && imc <= 25) {
            return 0;
        } else {
            return 1;
        }
    }

    @Override
    public String toString() {
        return "Nombre: " + nombre + "\n" +
               "Edad: " + edad + "\n" +
               "DNI: " + dni + "\n" +
               "Sexo: " + sexo + "\n" +
               "Peso: " + peso + "\n" +
               "Altura: " + altura;
    }
}