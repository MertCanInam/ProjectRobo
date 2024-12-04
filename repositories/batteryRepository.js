const { BatteryData } = require('../models/batteryModel');  // BatteryData modelini import ediyoruz

// Batarya verilerini almak için fonksiyon
const getBatteryData = async () => {
  try {
    const batteryData = await BatteryData.findAll();  // battery_data tablosundaki tüm veriyi alıyoruz
    return batteryData;
  } catch (error) {
    console.error('Veri alınırken hata oluştu:', error);
    throw error;
  }
};

module.exports = {
  getBatteryData,
};

module.exports = { getBatteryData };
