const bcrypt = require('bcryptjs');  // bcrypt'i import ediyoruz
const userRepository = require('../repositories/userRepository');  // userRepository'i import ediyoruz
const { comparePassword } = require('../utils/passwordUtils');  // Şifre karşılaştırma için passwordUtils'i import ediyoruz
const { User } = require('../models/userModel'); // User modelini import ediyoruz

// Kullanıcı girişi işlemi (login)
const login = async (username, inputPassword) => {
  try {
    // Kullanıcıyı veritabanından alıyoruz
    const user = await userRepository.getUserByUsername(username);
    if (!user) {
      return { success: false, message: 'Kullanıcı bulunamadı' };
    }

    // Şifreyi karşılaştırıyoruz
    const isPasswordMatch = await comparePassword(inputPassword, user.password);
    if (!isPasswordMatch) {
      return { success: false, message: 'Şifre hatalı' };
    }

    return { success: true, user };
  } catch (error) {
    console.error('Login işlemi sırasında hata:', error);
    throw error;
  }
};

// Kullanıcı oluşturma ve şifre hashleme fonksiyonu (register)
const registerUser = async (username, password, company, role) => {
  try {
    // Şifreyi hashle
    const hashedPassword = await bcrypt.hash(password, 10);

    // Yeni kullanıcıyı oluştur
    const user = await User.create({
      username,
      password: hashedPassword,  // Hashlenmiş şifreyi kaydediyoruz
      company,
      role,
    });

    return { success: true, message: 'Kullanıcı başarıyla oluşturuldu', user };
  } catch (error) {
    console.error('Kullanıcı oluşturulurken hata oluştu:', error);
    throw new Error('Kullanıcı oluşturulurken hata oluştu');
  }
};

module.exports = { login, registerUser };
