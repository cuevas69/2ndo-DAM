class MiHilo extends Thread {
    public MiHilo(String nombre) {
        super(nombre);
    }

    @Override
    public void run() {
        for (int i = 1; i <= 10; i++) {
            System.out.println(Thread.currentThread().getName() + ": Iteración " + i);
            try {
                Thread.sleep((int) (Math.random() * 1000));
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class Main {
    public static void main(String[] args) {
        MiHilo hilo1 = new MiHilo("Hilo 1");
        MiHilo hilo2 = new MiHilo("Hilo 2");
        MiHilo hilo3 = new MiHilo("Hilo 3");

        hilo1.start();
        hilo2.start();
        hilo3.start();
    }
}

/*1. ¿En qué orden se ejecutan los hilos y por qué?*/
//El orden en el que se ejecutan los hilos no está determinado y puede variar en cada ejecución.
//La planificación y ejecución de hilos están a cargo del sistema operativo y del planificador de hilos.

/*2. ¿Cómo cambia la salida si se incrementa el número de iteraciones en el método run()*/
//Si incrementas el número de iteraciones en el método run(), cada hilo realizará más trabajo antes de completar
//su ejecución. Esto puede hacer que los hilos se superpongan más en el tiempo, lo que aumenta las posibilidades
//de que los mensajes de diferentes hilos se mezclen en la salida. 

/*3. ¿Qué sucede si se utiliza el método run() en lugar de start() para ejecutar los hilos?*/
//Si utilizas el método run() en lugar de start(), los hilos se ejecutarán en el hilo principal de manera secuencial
//y no de manera concurrente. El método start() inicia un nuevo hilo y, internamente, llama al método run() 
//del nuevo hilo. Si usas directamente run(), estás ejecutando el código en el hilo principal y no estás aprovechando la concurrencia.
