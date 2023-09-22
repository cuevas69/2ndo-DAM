package repasojava;
/*Desarrolla un programa que utilice listas para almacenar nombres de
estudiantes. El programa debe permitir agregar, eliminar y mostrar los
nombres almacenados.*/

public class actividad7 {
    public class Estudiante {
        //Atributos
        private String nombre;
        
        //Constructores
        public Estudiante() {
            
        }

        public Estudiante(String nombre) {
            this.nombre = nombre;
        }

        //Getters y Setters
        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }    
    }
}