const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => {
  res.send('<form action="/auth/login" method="POST">' +
           'Usuario: <input type="text" name="username"><br>' +
           'Contraseña: <input type="password" name="password"><br>' +
           '<input type="submit" value="Iniciar sesión">' +
           '</form>');
});


router.post('/login', (req, res) => {
  const { username, password } = req.body;

  
  if (username === 'admin' && password === '1234') {
    res.send('Inicio de sesión exitoso');
  } else {
    res.status(401).send('Credenciales inválidas');
  }
});

module.exports = router;
