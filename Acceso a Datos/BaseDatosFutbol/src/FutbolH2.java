import org.w3c.dom.*;
import javax.xml.parsers.*;
import java.io.File;
import java.sql.*;
import java.util.Scanner;

public class FutbolH2 {

    // Variables estáticas para la configuración de la base de datos
    private static final String DB_URL = "jdbc:h2:~/datosfutboldefinitivo";
    private static final String USER = "prueba2";
    private static final String PASS = "prueba2";
    // Ruta del archivo XML
    private static final String XML_FILE_PATH = "C:\\marcadores.xml";

    // Método principal
    public static void main(String[] args) {
        try (Connection connection = DriverManager.getConnection(DB_URL, USER, PASS)) {
            // Crear tablas si no existen y cargar datos desde el archivo XML
            crearTablas(connection);
            importarDatosXML(connection, XML_FILE_PATH);

            // Configuración para leer la entrada del usuario
            Scanner scanner = new Scanner(System.in);

            while (true) {
                // Mostrar el menú principal
                mostrarMenu();
                // Obtener la elección del usuario
                int eleccion = obtenerSeleccionUsuario(scanner);

                // Realizar acciones según la elección del usuario
                switch (eleccion) {
                    case 1:
                        // Obtener y mostrar todos los eventos
                        obtenerTodosEventos(connection);
                        break;
                    case 2:
                        // Obtener y mostrar la clasificación
                        obtenerClasificacion(connection);
                        break;
                    case 3:
                        // Obtener y mostrar resultados de un equipo específico
                        obtenerResultadosEquipo(connection, scanner);
                        break;
                    case 4:
                        // Salir del programa
                        System.out.println("Saliendo del programa.");
                        return;
                    default:
                        // Mensaje para elecciones no válidas
                        System.out.println("Elección no válida. Por favor, inténtalo de nuevo.");
                }
            }
        } catch (Exception e) {
            // Manejo de excepciones: imprimir la traza de la excepción
            e.printStackTrace();
        }
    }

    // Método para mostrar el menú principal
    private static void mostrarMenu() {
        System.out.println("Elige una opción:");
        System.out.println("1. Obtener todos los eventos");
        System.out.println("2. Obtener clasificación");
        System.out.println("3. Obtener resultados del equipo");
        System.out.println("4. Salir");
    }

    // Método para obtener la elección del usuario
    private static int obtenerSeleccionUsuario(Scanner scanner) {
        System.out.print("Ingresa tu elección: ");
        // Validar que la entrada sea un entero
        while (!scanner.hasNextInt()) {
            System.out.println("No válido. Por favor, introduce otro número.");
            System.out.print("Escribe tu elección: ");
            scanner.next(); // Consumir la entrada inválida
        }
        return scanner.nextInt();
    }

    // Método para crear las tablas en la base de datos
    private static void crearTablas(Connection connection) throws SQLException {
        try (Statement statement = connection.createStatement()) {
            // Crear la tabla Events
            String crearTablaEventos = "CREATE TABLE IF NOT EXISTS Eventos (" +
                    "id INT AUTO_INCREMENT PRIMARY KEY," +
                    "fecha VARCHAR(20)," +
                    "estado VARCHAR(20)," +
                    "equipo_local VARCHAR(50)," +
                    "equipo_visitante VARCHAR(50)," +
                    "puntuacion_local INT," +
                    "puntuacion_visitante INT)";
            statement.executeUpdate(crearTablaEventos);

            // Crear la tabla Clasificación
            String crearTablaClasificacion = "CREATE TABLE IF NOT EXISTS Clasificacion (" +
                    "id INT AUTO_INCREMENT PRIMARY KEY," +
                    "nombre_equipo VARCHAR(50)," +
                    "puntos INT," +
                    "jugados INT," +
                    "ganados INT," +
                    "perdidos INT," +
                    "empatados INT," +
                    "goles_marcados INT," +
                    "goles_concedidos INT)";
            statement.executeUpdate(crearTablaClasificacion);
        }
    }

    // Método para importar datos desde el archivo XML a la base de datos
    private static void importarDatosXML(Connection connection, String rutaArchivoXML) {
        try {
            // Configuración del parser de XML
            DocumentBuilderFactory factory = DocumentBuilderFactory.newInstance();
            DocumentBuilder builder = factory.newDocumentBuilder();

            // Parsear el archivo XML
            Document documento = builder.parse(new File(rutaArchivoXML));

            // Obtener la raíz del documento
            Element raiz = documento.getDocumentElement();

            // Importar eventos
            importarEventos(connection, raiz.getElementsByTagName("evento"));

            // Importar clasificación
            importarClasificacion(connection, raiz.getElementsByTagName("team"));
        } catch (Exception e) {
            // Manejo de excepciones: imprimir la traza de la excepción
            e.printStackTrace();
        }
    }

    // Método para importar eventos desde el XML a la base de datos
    private static void importarEventos(Connection connection, NodeList eventos) throws SQLException {
        // Consulta para insertar un evento en la base de datos
        String consultaInsertarEvento = "INSERT INTO Eventos (fecha, estado, equipo_local, equipo_visitante, puntuacion_local, puntuacion_visitante) VALUES (?, ?, ?, ?, ?, ?)";

        try (PreparedStatement preparedStatement = connection.prepareStatement(consultaInsertarEvento)) {
            for (int i = 0; i < eventos.getLength(); i++) {
                Element elementoEvento = (Element) eventos.item(i);

                // Obtener datos del evento del XML
                String fecha = elementoEvento.getElementsByTagName("fecha").item(0).getTextContent();
                String estado = elementoEvento.getElementsByTagName("estado").item(0).getTextContent();
                String equipoLocal = elementoEvento.getElementsByTagName("equipolocal").item(0).getTextContent();
                String equipoVisitante = elementoEvento.getElementsByTagName("equipovisitante").item(0).getTextContent();
                int puntuacionLocal = Integer.parseInt(elementoEvento.getElementsByTagName("resultadolocal").item(0).getTextContent());
                int puntuacionVisitante = Integer.parseInt(elementoEvento.getElementsByTagName("resultadovisitante").item(0).getTextContent());

                // Establecer parámetros y ejecutar la consulta
                preparedStatement.setString(1, fecha);
                preparedStatement.setString(2, estado);
                preparedStatement.setString(3, equipoLocal);
                preparedStatement.setString(4, equipoVisitante);
                preparedStatement.setInt(5, puntuacionLocal);
                preparedStatement.setInt(6, puntuacionVisitante);

                preparedStatement.executeUpdate();
            }
        }
    }

    // Método para importar clasificaciones desde el XML a la base de datos
    private static void importarClasificacion(Connection connection, NodeList equipos) throws SQLException {
        // Consulta para insertar la clasificación en la base de datos
        String consultaInsertarClasificacion = "INSERT INTO Clasificacion (nombre_equipo, puntos, jugados, ganados, perdidos, empatados, goles_marcados, goles_concedidos) " +
                "VALUES (?, ?, ?, ?, ?, ?, ?, ?)";

        try (PreparedStatement preparedStatement = connection.prepareStatement(consultaInsertarClasificacion)) {
            for (int i = 0; i < equipos.getLength(); i++) {
                Element elementoEquipo = (Element) equipos.item(i);

                // Obtener datos del equipo del XML
                String nombreEquipo = elementoEquipo.getElementsByTagName("name").item(0).getTextContent();
                int puntos = Integer.parseInt(elementoEquipo.getElementsByTagName("points").item(0).getTextContent());
                int jugados = Integer.parseInt(elementoEquipo.getElementsByTagName("played").item(0).getTextContent());
                int ganados = Integer.parseInt(elementoEquipo.getElementsByTagName("won").item(0).getTextContent());
                int perdidos = Integer.parseInt(elementoEquipo.getElementsByTagName("lost").item(0).getTextContent());
                int empatados = Integer.parseInt(elementoEquipo.getElementsByTagName("drawn").item(0).getTextContent());
                int golesMarcados = Integer.parseInt(elementoEquipo.getElementsByTagName("goals_scored").item(0).getTextContent());
                int golesConcedidos = Integer.parseInt(elementoEquipo.getElementsByTagName("goals_conceded").item(0).getTextContent());

                // Establecer parámetros y ejecutar la consulta
                preparedStatement.setString(1, nombreEquipo);
                preparedStatement.setInt(2, puntos);
                preparedStatement.setInt(3, jugados);
                preparedStatement.setInt(4, ganados);
                preparedStatement.setInt(5, perdidos);
                preparedStatement.setInt(6, empatados);
                preparedStatement.setInt(7, golesMarcados);
                preparedStatement.setInt(8, golesConcedidos);

                preparedStatement.executeUpdate();
            }
        }
    }

    // Método para obtener y mostrar todos los eventos desde la base de datos
    private static void obtenerTodosEventos(Connection connection) throws SQLException {
        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery("SELECT * FROM Eventos")) {
            while (resultSet.next()) {
                // Imprimir detalles del evento
                System.out.println("ID del Evento: " + resultSet.getInt("id"));
                System.out.println("Fecha: " + resultSet.getString("fecha"));
                System.out.println("Estado: " + resultSet.getString("estado"));
                System.out.println("Equipo Local: " + resultSet.getString("equipo_local"));
                System.out.println("Equipo Visitante: " + resultSet.getString("equipo_visitante"));
                System.out.println("Puntuación Local: " + resultSet.getInt("puntuacion_local"));
                System.out.println("Puntuación Visitante: " + resultSet.getInt("puntuacion_visitante"));
                System.out.println("------------------------");
            }
        }
    }

    // Método para obtener y mostrar la clasificación desde la base de datos
    private static void obtenerClasificacion(Connection connection) throws SQLException {
        try (Statement statement = connection.createStatement();
             ResultSet resultSet = statement.executeQuery("SELECT * FROM Clasificacion")) {
            while (resultSet.next()) {
                // Imprimir detalles de la clasificación
                System.out.println("Equipo: " + resultSet.getString("nombre_equipo"));
                System.out.println("Puntos: " + resultSet.getInt("puntos"));
                System.out.println("Jugados: " + resultSet.getInt("jugados"));
                System.out.println("Ganados: " + resultSet.getInt("ganados"));
                System.out.println("Perdidos: " + resultSet.getInt("perdidos"));
                System.out.println("Empatados: " + resultSet.getInt("empatados"));
                System.out.println("Goles Marcados: " + resultSet.getInt("goles_marcados"));
                System.out.println("Goles Concedidos: " + resultSet.getInt("goles_concedidos"));
                System.out.println("------------------------");
            }
        }
    }

    // Método para obtener y mostrar resultados de un equipo específico desde la base de datos
    private static void obtenerResultadosEquipo(Connection connection, Scanner scanner) throws SQLException {
        System.out.print("Ingresa el nombre del equipo: ");
        String nombreEquipo = scanner.next();

        // Consulta para obtener eventos relacionados con el equipo
        String consulta = "SELECT * FROM Eventos WHERE equipo_local = ? OR equipo_visitante = ?";

        try (PreparedStatement preparedStatement = connection.prepareStatement(consulta)) {
            preparedStatement.setString(1, nombreEquipo);
            preparedStatement.setString(2, nombreEquipo);

            try (ResultSet resultSet = preparedStatement.executeQuery()) {
                while (resultSet.next()) {
                    // Imprimir detalles del evento relacionado con el equipo
                    System.out.println("ID del Evento: " + resultSet.getInt("id"));
                    System.out.println("Fecha: " + resultSet.getString("fecha"));
                    System.out.println("Estado: " + resultSet.getString("estado"));
                    System.out.println("Equipo Local: " + resultSet.getString("equipo_local"));
                    System.out.println("Equipo Visitante: " + resultSet.getString("equipo_visitante"));
                    System.out.println("Puntuación Local: " + resultSet.getInt("puntuacion_local"));
                    System.out.println("Puntuación Visitante: " + resultSet.getInt("puntuacion_visitante"));
                    System.out.println("------------------------");
                }
            }
        }
    }
}
