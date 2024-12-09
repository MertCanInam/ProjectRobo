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
// Yeni kullanıcı oluşturma
const createUser = async (username, password, company, role) => {
  try {
    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcıyı veritabanına kaydet
    const user = await User.create({
      username,
      password: hashedPassword,  // Hashlenmiş şifreyi kaydediyoruz
      company,
      role,
    });

    return user;
  } catch (error) {
    console.error('Kullanıcı oluşturulurken hata oluştu:', error);
    throw error;
  }
};



module.exports = {
  getUserByUsername, createUser
};
