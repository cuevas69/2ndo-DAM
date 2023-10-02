import java.io.BufferedReader;
import java.io.File;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;

public class MiFichero {
    public static void main(String[] args) {
        try {
            // 1. Crear un archivo de texto llamado "datos.txt" con la clase File 
            // y el método createNewFile().
            File archivo = new File("datos.txt");
            archivo.createNewFile();

            // 2. Abrir el archivo en modo escritura con FileWriter 
            // y escribir 5 líneas de texto inventado. Cerrar el flujo con close().
            FileWriter escritor = new FileWriter(archivo);
            escritor.write("Hola\n");
            escritor.write("soy\n");
            escritor.write("Andres\n");
            escritor.write("Cuevas.\n");
            escritor.write("Encantao\n");
            escritor.close();

            // 3. Abrir el archivo en modo lectura con FileReader y BufferedReader. 
            // Leer línea a línea e imprimir el contenido por consola con println(). Cerrar flujos.
            FileReader lector = new FileReader(archivo);
            BufferedReader buffer = new BufferedReader(lector);
            
            String linea;
            while ((linea = buffer.readLine()) != null) { //función para leer linea a linea
                System.out.println(linea);
            }
            buffer.close();
            
            // 4. Abrir de nuevo en modo lectura y recorrer caracter a caracter contando los caracteres totales. 
            // Mostrar resultado.
            lector = new FileReader(archivo);
            int totalCaracteres = 0;
            int caracter;
            while ((caracter = lector.read()) != -1) { //funcion para recorrer caracter a caracter contando los totales.
                totalCaracteres++;
            }
            lector.close();
            System.out.println("Total de caracteres: " + totalCaracteres);
            
            // 5. Abrir de nuevo en modo lectura, leer línea a línea y 
            // usar contains() para contar ocurrencias de una palabra.
            lector = new FileReader(archivo);
            buffer = new BufferedReader(lector);
            
            String buscarPalabra = "texto";
            int ocurrencias = 0;
            while ((linea = buffer.readLine()) != null) {
                if (linea.contains(buscarPalabra)) { //contar ocurrencias de la palabra buscada
                    ocurrencias++;
                }
            }
            buffer.close();
            System.out.println("Ocurrencias '" + buscarPalabra + "': " + ocurrencias); //imprimir ocurrencias de la palabra buscada

            // 6. Abrir en modo lectura y escritura usando FileReader y FileWriter. 
            // Leer línea a línea, reemplazar una palabra y volver a escribir.
            lector = new FileReader(archivo);
            FileWriter escritor2 = new FileWriter(archivo, true);
            buffer = new BufferedReader(lector);
            String palabraReemplazar = "reemplazar";
            String palabraReemplazo = "reemplazado";
            String contenidoModificado = "";
            while ((linea = buffer.readLine()) != null) { //leer linea a linea y modificar la palabra escrita por la reemplazada
                contenidoModificado += linea.replace(palabraReemplazar, palabraReemplazo) + "\n";
            }
            buffer.close();
            escritor2.write(contenidoModificado);
            escritor2.close();

            // 7. Abrir archivo original en lectura y 
            // copiar línea a línea en un nuevo archivo "copia.txt" usando FileWriter.
            File copia = new File("copia.txt");
            escritor = new FileWriter(copia); //instancia para copiar y pegar contenido del original a la copia
            lector = new FileReader(archivo);
            buffer = new BufferedReader(lector);
            while ((linea = buffer.readLine()) != null) { //leer linea a linea del archivo original
                escritor.write(linea + "\n");
            }
            buffer.close();
            escritor.close();

            // 8. Abrir "datos.txt" y "copia.txt" en modo append. 
            // Leer líneas de "datos.txt" y añadir al final de "copia.txt".
            escritor = new FileWriter(copia, true);
            lector = new FileReader(archivo);
            buffer = new BufferedReader(lector);
            while ((linea = buffer.readLine()) != null) {
                escritor.write(linea + "\n");
            }
            buffer.close();
            escritor.close();

            // 9. Abrir "copia.txt" en lectura/escritura, leer líneas, convertir a mayúsculas y volver a escribir.
            lector = new FileReader(copia);
            buffer = new BufferedReader(lector);
            escritor = new FileWriter(copia);
            while ((linea = buffer.readLine()) != null) { //funcion para leer lineas y reemplazar el contenido a mayúsculas
                escritor.write(linea.toUpperCase() + "\n");
            }
            buffer.close();
            escritor.close();

            // 10. Abrir "copia.txt" en lectura/escritura, leer líneas, eliminar espacios en blanco y volver a escribir.
            lector = new FileReader(copia);
            buffer = new BufferedReader(lector);
            escritor = new FileWriter(copia);
            while ((linea = buffer.readLine()) != null) {
                String lineaSinEspacios = linea.replaceAll("\\s+", "");
                escritor.write(lineaSinEspacios);
                escritor.write(System.lineSeparator());
            }

            // 11. Abrir "copia.txt" en lectura/escritura, leer líneas en lista, invertir lista y volver a escribir
            lector = new FileReader(copia);
            buffer = new BufferedReader(lector);
            escritor = new FileWriter(copia);

            // 12. Crear objeto File para "datos.txt" y eliminar con delete().
            archivo.delete();

            // 13. Comprobar si "datos.txt" existe después de eliminarlo con exists().
            if (archivo.exists()) {
                System.out.println("El archivo 'datos.txt' existe.");
            } else {
                System.out.println("El archivo 'datos.txt' no existe.");
            }

            // 14. Crear directorio "ejercicios" con mkdir(). Mover "copia.txt" a ese directorio con renameTo().
            File directorio = new File("ejercicios"); //creamos directorio con el nombre de ejercicios
            directorio.mkdir();
            File newCopia = new File(directorio, "copia.txt"); //movemos el archivo txt al nuevo directorio con renameTo()
            copia.renameTo(newCopia);

            // 15. Obtener última fecha de modificación y tamaño en bytes de "copia.txt" y mostrar.
            long ultimaModificacion = newCopia.lastModified();
            long tamañoBytes = newCopia.length();
            System.out.println("Última fecha de modificación: " + ultimaModificacion);
            System.out.println("Tamaño en bytes: " + tamañoBytes);

        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}