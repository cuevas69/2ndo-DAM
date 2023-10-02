import java.util.Random;

public class GeneradorAleatorio {
    public static void main(String[] args) {
        Random random = new Random();
        
        for (int i = 0; i < 40; i++) {
            int numero = random.nextInt(101); 
            System.out.println(numero);
        }
    }
}