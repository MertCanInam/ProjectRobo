const userRepository = require('../repositories/userRepository');  // userRepository'i import ediyoruz
const { comparePassword } = require('../utils/passwordUtils');   // Şifre karşılaştırma için passwordUtils'i import ediyoruz

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

module.exports = { login };
