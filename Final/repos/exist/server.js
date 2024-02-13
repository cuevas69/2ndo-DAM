const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const { createDatabaseClient } = require('existdb');

dotenv.config();

const port = process.env.PORT || 3000;

const fakemonRouter = require('./fakemon/fakemonRouter');
const db = createDatabaseClient({
  host: 'localhost',
  port: 8080,
  basic_auth: { user: 'admin', pass: 'admin' },
});

app.use(cors({ origin: '*' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/fakemonico', express.static(path.join(__dirname, 'fakemonico')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'apitesthall.html'));
});

app.use('/api/fakemon', fakemonRouter);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

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

    if (user && (await bcrypt.compare(password, user.password))) {
      res.redirect('/apitesthall.html');
    } else {
      res.status(401).send('Invalid username or password');
    }
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).send('Error during login');
  }
});

// Importa el controlador que contiene la función insertFakemonData
const fakemonController = require('./fakemon/fakemonController');

// Llama a la función para insertar datos de Fakemon
fakemonController.insertFakemonData();

app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/login.html');
});

app.get('/apitesthall.html', (req, res) => {
  res.sendFile(__dirname + '/apitesthall.html');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
