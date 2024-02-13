const { createDatabaseClient } = require('existdb');
const db = createDatabaseClient({
  host: 'localhost',
  port: 8080,
  basic_auth: { user: 'admin', pass: 'admin' },
});

exports.getAllFakemon = async (req, res) => {
  try {
    const result = await db.query(`
      xquery version "3.1";
      declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

      for $fakemon in collection("/db/pokeapi")//fakemon
      return $fakemon
    `);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los Fakemons' });
  }
};

exports.getFakemonById = async (req, res) => {
  try {
    const fakemonId = req.params.id;
    const result = await db.query(`
      xquery version "3.1";
      declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

      for $fakemon in collection("/db/pokeapi")//fakemon
      where $fakemon/id = ${fakemonId}
      return $fakemon
    `);

    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ error: 'Fakemon no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el Fakemon por ID' });
  }
};

exports.getFakemonByName = async (req, res) => {
  try {
    const fakemonName = req.params.name.toLowerCase();
    const result = await db.query(`
      xquery version "3.1";
      declare namespace output = "http://www.w3.org/2010/xslt-xquery-serialization";

      for $fakemon in collection("/db/pokeapi")//fakemon
      where lower-case($fakemon/name) = '${fakemonName}'
      return $fakemon
    `);

    if (result.length > 0) {
      res.json(result[0]);
    } else {
      res.status(404).json({ error: 'Fakemon no encontrado' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el Fakemon por nombre' });
  }
};

// Función para insertar datos en la colección
exports.insertFakemonData = async () => {
  try {
    // Obtén los datos de Fakemon
    const fakemonData = require('./fakemonData');

    // Inserta cada Fakemon en la colección
    for (const fakemon of fakemonData) {
      await db.execute(`
        xmldb:store("/db/pokeapi", "${fakemon.name}.xml", '${JSON.stringify(fakemon)}')
      `);
    }

    console.log('Datos de Fakemon insertados correctamente.');
  } catch (error) {
    console.error('Error al insertar datos de Fakemon:', error);
  }
};
