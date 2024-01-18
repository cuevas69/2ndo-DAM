const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Agrega la importación de CORS
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');

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

// Usa el enrutador de Fakemon en la ruta /api/fakemon
app.use('/api/fakemon', fakemonRouter);

// Middleware para manejar errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

// Create User Model
const User = mongoose.model('User', userSchema);

// Routes
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    console.log(password);
    console.log(req.body);
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();
    res.redirect('/apitesthall.html');
  } catch (error) {
    console.error('Error during registration:', error);
    res.status(500).send('Error during registration');
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (user && await bcrypt.compare(password, user.password)) {
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