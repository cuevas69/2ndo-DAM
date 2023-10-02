import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class prueba1 {
    public static void main(String args[]) {
        try {
            //Crear directorio "mis_ficheros" con mkdir().
            File directorio = new File("C:\\TEMP\\mis_ficheros");
            directorio.mkdir();
            //Crear archivo "datos.txt" con createNewFile(). 
            File datos = new File(directorio, "datos.txt");
            datos.createNewFile();
            //Contenido del archivo "datos.txt".
            FileWriter escritor = new FileWriter(datos);
            escritor.write("\"Era un muchacho de rostro encantador, tal vez de dieciséis años cuando fue convertido, con esa\r\n" + //
                    "piel lisa que tiene algunos donceles y facciones muy finas. Tenía el cabello muy rubio y liso, y ojos\r\n" + //
                    "de un azul intenso. Y los labios, como cerezas, parecían en verdad demasiado perfectos. Pero\r\n" + //
                    "era mundano, del todo mortal, de una belleza y una perfección tan delicadas que inspiraban amor\r\n" + //
            "al mismo tiempo que compasión, amor que no podía durar.\"");
            escritor.close();
            //Leer contenido de "datos.txt" con FileReader y BufferedReader.
            FileReader lector = new FileReader(datos);
            BufferedReader buffer = new BufferedReader(lector);
            
            String linea;
            
            while ((linea = buffer.readLine()) != null) { 
                System.out.println(linea);
            }
            buffer.close();
            //Contar palabras totales del archivo "datos.txt".
            lector = new FileReader(datos);
            buffer = new BufferedReader(lector);
            
            int i,j,a=0;
            
            while((linea=buffer.readLine())!=null) {
                for(i=0;i<linea.length();i++) {
                    if(i==0) {
                        if(linea.charAt(i)!=' ') a++;
                    }else {
                        if(linea.charAt(i-1)==' ')
                        if(linea.charAt(i)!=' ')	
                        a++;
                    }	
                }
            }
            System.out.println("Son "+a+" palabras");
            lector.close();
            buffer.close();
            //Copiar contenido de "datos.txt" a "copia.txt" y guardarlo en "mis_ficheros".
            File copia = new File(directorio, "copia.txt");
            copia.createNewFile();
            escritor = new FileWriter(copia);
            lector = new FileReader(datos);
            buffer = new BufferedReader(lector);

            while ((linea = buffer.readLine()) != null) { 
                escritor.write(linea);
            }
            buffer.close();
            escritor.close();
            //Mover "copia.txt" a la carpeta anterior
            String mover = "C:\\TEMP";
 
            if (copia.renameTo(new File(mover + copia.getName()))) {
                System.out.println("Archivo copia.txt movido.");
            } else {
                System.out.println("Error.");
            }
            //Mostrar fecha de modificación del archivo "datos.txt".
            long ultimaModificacion = datos.lastModified();
            System.out.println("Última fecha de modificación: " + ultimaModificacion);
            //Comprobar permisos lectura y escritura.
            if (datos.canRead()) {
                System.out.println(datos.getName() + " tiene permisos de lectura");
            }else {
                System.out.println(datos.getName() + " NO tiene permisos de lectura");
            }
            if (datos.canWrite()) {
                System.out.println(datos.getName() + " tiene permisos de escritura");
            }else {
                System.out.println(datos.getName() + " NO tiene permisos de escritura");
            }

        }catch (IOException e) {
                e.printStackTrace();
        }
    }        
}
