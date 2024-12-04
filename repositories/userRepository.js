const { User } = require('../models/userModel');  // User modelini import ediyoruz

// Kullanıcıyı kullanıcı adıyla veritabanından bulmak
const getUserByUsername = async (username) => {
  try {
    const user = await User.findOne({ where: { username } });
    return user;
  } catch (error) {
    console.error('Kullanıcı verisi alınırken hata oluştu:', error);
    throw error;
  }
};

module.exports = {
  getUserByUsername,
};
