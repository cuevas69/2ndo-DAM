const fakemonData = require('./fakemonData');
const oracledb = require('oracledb');
const dbConfig = {
  user: 'SYSTEM',
  password: 'admin',
  connectString: 'localhost:1521/XE',
};

// Controlador para obtener todos los Fakemon
exports.getAllFakemon = async (req, res) => {
  try {
    const connection = await oracledb.getConnection(dbConfig);
    const result = await connection.execute('SELECT * FROM FAKEMON_TABLE'); // Reemplaza con tu tabla real
    const fakemonData = result.rows;
    connection.close();
    res.json(fakemonData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los Fakemons' });
  }
};

// Controlador para obtener un Fakemon por su ID
exports.getFakemonById = (req, res) => {
  const fakemonId = req.params.id;
  const fakemon = fakemonData.find((f) => f.id == fakemonId);

  if (fakemon) {
    res.json(fakemon);
  } else {
    res.status(404).json({ error: 'Fakemon no encontrado' });
  }
};

// Controlador para obtener un Fakemon por su nombre (insensible a mayúsculas y minúsculas)
exports.getFakemonByName = (req, res) => {
    const fakemonName = req.params.name.toLowerCase(); // Convertir a minúsculas
    const fakemon = fakemonData.find((f) => f.name.toLowerCase() === fakemonName);
  
    if (fakemon) {
      res.json(fakemon);
    } else {
      res.status(404).json({ error: 'Fakemon no encontrado' });
    }
  };
