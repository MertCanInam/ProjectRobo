// utils/passwordUtils.js
const bcrypt = require('bcryptjs');

// Şifre karşılaştırma
const comparePassword = async (inputPassword, storedHashedPassword) => {
  try {
    return await bcrypt.compare(inputPassword, storedHashedPassword);
  } catch (error) {
    console.error('Şifre karşılaştırma hatası:', error);
    throw error;
  }
};

// Şifre hashleme
const hashPassword = async (password) => {
  try {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    console.error('Şifre hashleme hatası:', error);
    throw error;
  }
};

module.exports = {
  comparePassword,
  hashPassword,
};
