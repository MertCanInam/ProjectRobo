const { BatteryData } = require('../models/batteryModel');  // Modeli doğru içe aktardık

// getBatteryData fonksiyonu, her rol için uygun veriyi döner
const getBatteryData = async (userRole, userId) => {
  try {
    let batteryData;

    if (userRole === 'admin') {
      // Admin tüm veriyi alabilir
      batteryData = await BatteryData.findAll();  // Admin için tüm veriyi çekiyoruz
    }
    else if (userRole === 'user') {
      // User sadece kendi verilerini alabilir
      if (!userId) {
        throw new Error('Kullanıcı ID\'si bulunamadı');
      }
      batteryData = await BatteryData.findAll({ where: { user_id: userId } });  // Kullanıcının sadece kendi verisini çekiyoruz
    }
    else if (userRole === 'maintainer') {
      // Maintainer sadece belirli batarya verilerini görebilir
      if (!userId) {
        throw new Error('Kullanıcı ID\'si bulunamadı');
      }
      batteryData = await BatteryData.findAll({
        attributes: ['battery_level', 'voltage', 'current', 'temperature', 'capacity'],  // Sadece belirli alanları seçiyoruz
        where: { user_id: userId }  // Kullanıcıya ait verileri çekiyoruz
      });
    } else {
      throw new Error('Erişim reddedildi');
    }

    return batteryData;  // Verileri döndürüyoruz
  } catch (error) {
    throw new Error('Veri alırken hata oluştu: ' + error.message);  // Hata mesajını döndürüyoruz
  }
};

module.exports = {
  getBatteryData  // Fonksiyonu dışa aktarıyoruz
};
