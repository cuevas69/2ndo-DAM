package repasojava;
import java.util.ArrayList;
import java.util.List;

public class actividad7Main {

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
}