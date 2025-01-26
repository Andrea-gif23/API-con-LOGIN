// middlewares/authMiddleware.js
const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ msg: 'No hay token, acceso denegado' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (err) {
    return res.status(401).json({ msg: 'Token no válido' });
  }
};

module.exports = { checkAuth };
