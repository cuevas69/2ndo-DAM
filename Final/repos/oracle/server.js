const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const oracledb = require('oracledb');

// Carga variables de entorno desde el archivo .env
dotenv.config();

const port = process.env.PORT || 3000;

// Configuración de Oracle
const dbConfig = {
  user: 'SYSTEM',
  password: 'admin',
  connectString: 'localhost:1521/XE',
};

// Importa el enrutador de Fakemon
const fakemonRouter = require('./fakemon/fakemonRouter');

// Middleware para permitir solicitudes desde cualquier origen
app.use(cors({ origin: '*' }));

// Agrega el middleware body-parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Sirve archivos estáticos desde la carpeta fakemonico
app.use('/fakemonico', express.static(path.join(__dirname, 'fakemonico')));

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Manejar la solicitud a la ruta principal y devolver el contenido de apitesthall.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'apitesthall.html'));
});

// Endpoint para obtener todos los Fakemon desde Oracle
app.get('/api/fakemon', async (req, res) => {
  try {
    // Crear una conexión a la base de datos
    const connection = await oracledb.getConnection({
      user: 'SYSTEM',
      password: 'admin',
      connectString: 'localhost:1521/XE',
    });

    // Ejecutar una consulta SQL para obtener todos los Fakemon
    const result = await connection.execute('SELECT * FROM FAKEMON_TABLE'); 
    const fakemonData = result.rows;

    // Cerrar la conexión
    await connection.close();

    // Enviar los datos como respuesta
    res.json(fakemonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los Fakemons desde Oracle' });
  }
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Routes
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    // Utiliza dbConfig que ahora está definido antes de este bloque
    const connection = await oracledb.getConnection(dbConfig);

    // Utiliza la tabla USERS que mencionaste en tu estructura Oracle
    const insertQuery = `INSERT INTO USERS (username, password) VALUES (:username, :password)`;
    const bindParams = { username, password: hashedPassword };
    
    // Cambia el nombre del campo PASSWORD según la estructura real de tu tabla en Oracle
    await connection.execute(insertQuery, bindParams);
    await connection.close();

    res.redirect('/apitesthall.html');
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Error during registration');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Comentario: Realiza la lógica de búsqueda directamente sin utilizar el modelo
    const connection = await oracledb.getConnection(dbConfig);
    const selectQuery = `SELECT * FROM USERS WHERE username = :username`;
    const bindParams = { username };
    const result = await connection.execute(selectQuery, bindParams);
    const user = result.rows[0];
    await connection.close();

    if (user && await bcrypt.compare(password, user.PASSWORD)) {
      res.redirect('/apitesthall.html');
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Error during login');
  }
});

// Serve login.html
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

// Serve apitesthall.html
app.get('/apitesthall.html', (req, res) => {
  res.sendFile(__dirname + '/apitesthall.html');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
