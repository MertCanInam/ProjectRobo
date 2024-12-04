const jwt = require('jsonwebtoken');
const { jwtSecret } = require('../config/auth'); // auth.js dosyasındaki secret anahtarını import ediyoruz

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', ''); // Token başlıkta 'Bearer' olarak geldiğini varsayıyoruz

  if (!token) {
    console.log('Token eksik!');
    return res.status(401).json({ message: 'Token is missing or invalid' });
  }

  try {
    const decoded = jwt.verify(token, jwtSecret); // Token'ı doğruluyoruz
    console.log('Doğrulanmış Token:', decoded); // Token içeriğini logla
    req.user = decoded; // decoded token'dan kullanıcı bilgilerini alıyoruz
    next(); // Sonraki middleware veya route handler'a geçiyoruz
  } catch (err) {
    return res.status(401).json({ message: 'Unauthorized access' });
  }
};

module.exports = authMiddleware;
