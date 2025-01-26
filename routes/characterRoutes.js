const express = require('express');
const axios = require('axios');  // Para hacer peticiones a la API de Rick and Morty
const router = express.Router();

// Middleware para verificar si el usuario está autenticado
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    return next();
  } else {
    res.redirect('/');
  }
}

// Ruta principal de búsqueda de personajes
router.get('/search', isAuthenticated, (req, res) => {
  res.render('search'); // Deberías tener un archivo 'search.ejs' para renderizar
});

// Ruta para obtener el detalle de un personaje
router.get('/character/:nombre', isAuthenticated, async (req, res) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${req.params.nombre}`);
    const character = response.data;

    // Aquí renderizas una vista con la información del personaje
    res.render('character', { character });  // Debes tener un archivo 'character.ejs' para renderizar
  } catch (error) {
    res.status(404).send('Personaje no encontrado');
  }
});

module.exports = router;
