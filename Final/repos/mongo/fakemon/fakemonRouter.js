const express = require('express');
const router = express.Router();
const fakemonController = require('./fakemonController');

// Ruta para obtener todos los Fakemon
router.get('/', fakemonController.getAllFakemon);

// Ruta para obtener un Fakemon por su ID
router.get('/:id', fakemonController.getFakemonById);

// Nueva ruta para obtener un Fakemon por su nombre
router.get('/name/:name', fakemonController.getFakemonByName);

module.exports = router;