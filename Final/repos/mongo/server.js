const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Agrega la importación de CORS
const app = express();
const path = require('path');

// Carga variables de entorno desde el archivo .env
dotenv.config();

const port = process.env.PORT || 3000;

// Importa el enrutador de Fakemon
const fakemonRouter = require('./fakemon/fakemonRouter');

// Middleware para permitir solicitudes desde cualquier origen
/* app.use(cors({
  origin: 'http://tu-frontend.com',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
})); */
app.use(cors({ origin: '*' }));

// Sirve archivos estáticos desde la carpeta fakemonico
app.use('/fakemonico', express.static(path.join(__dirname, 'fakemonico')));

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Manejar la solicitud a la ruta principal y devolver el contenido de apitesthall.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'apitesthall.html'));
});

// Usa el enrutador de Fakemon en la ruta /api/fakemon
app.use('/api/fakemon', fakemonRouter);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Inicia el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});