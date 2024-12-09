const userService = require('../services/userService');  // userService'i import ediyoruz
const jwt = require('jsonwebtoken');
const { jwtSecret, jwtExpiration } = require('../config/auth');  // JWT Secret ve Expiration'ı config'ten alıyoruz

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Login fonksiyonunu userService'ten çağırıyoruz
    const { success, message, user } = await userService.login(username, password);
    
    if (!success) {
      return res.status(400).json({ message });
    }

    // JWT token oluşturuluyor
    const token = jwt.sign(
      { userId: user.id, username: user.username, role: user.role },
      jwtSecret,
      { expiresIn: jwtExpiration }
    );

    res.json({ token });
  } catch (error) {
    console.error('Login işlemi sırasında hata:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
const { registerUser } = require('../services/userService');  // userService'i import ediyoruz

// Register (Kayıt) Fonksiyonu
const register = async (req, res) => {
  const { username, password, company, role } = req.body;

  try {
    const user = await registerUser(username, password, company, role);
    res.status(201).json({ message: 'Kullanıcı başarıyla oluşturuldu', user });
  } catch (error) {
    console.error('Kullanıcı oluşturulurken hata oluştu:', error);
    res.status(500).json({ message: 'Kullanıcı oluşturulurken hata oluştu' });
  }
};




module.exports = { login ,register };
