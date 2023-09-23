// 7. Aplicación de las estructuras de almacenamiento avanzadas:
// – Desarrolla un programa que utilice listas para almacenar nombres de
// estudiantes. El programa debe permitir agregar, eliminar y mostrar los
// nombres almacenados
import java.util.ArrayList;
import java.util.List;
import java.util.Iterator;

public class actividad7 {

    public static void main(String[] args) {
        List<Estudiante> estudiantes = estudiantes();
        print(estudiantes);
    }

    public static List<Estudiante> estudiantes(){
        //Se instancia utilizando ArrayList. 
        List<Estudiante> estudiantes = new ArrayList<>();
        //Se agregan registros de usuario a la lista.
        estudiantes.add(new Estudiante("Andre"));
        estudiantes.add(new Estudiante("Marco"));
        estudiantes.add(new Estudiante("Miguel"));
        estudiantes.add(new Estudiante("Victor"));

        return estudiantes;
    }
    
    //Método para imprimir
    public static void print(List<Estudiante> estudiantes){
        System.out.println("Imprimiendo datos...");
        System.out.println("_____________________________");
        //Utilizamos foreach para acceder a cada registro usuario y mostrarlo
        for(Estudiante e: estudiantes){
            System.out.println("Nombre: " + e.getNombre());
            System.out.println("_________________________________");
        }
    }
    
    //Metodo para borrar estudiante
    public void borrarEstudiante(String nombre) {
        Iterator<Estudiante> iterator = estudiantes().iterator();
        while (iterator.hasNext()) {
            Estudiante estudiante = iterator.next();
            if (estudiante.getNombre().equals(nombre)) {
                iterator.remove();
                System.out.println("Estudiante eliminado: " + estudiante.getNombre());
            }
        }
    }
}