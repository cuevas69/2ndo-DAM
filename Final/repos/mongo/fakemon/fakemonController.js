const fakemonData = require('./fakemonData');

// Controlador para obtener todos los Fakemon
exports.getAllFakemon = (req, res) => {
  res.json(fakemonData);
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
