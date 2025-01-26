const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');


app.use(bodyParser.urlencoded({ extended: true }));

app.use('/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('<h1>Bienvenida a la primera parte del ejercicio</h1><a href="/auth/login">Iniciar sesión</a>');
});


app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
