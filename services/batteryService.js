const batteryRepository = require('../repositories/batteryRepository');  // batteryRepository'i import ediyoruz

const getBatteryData = async () => {
  try {
    const batteryData = await batteryRepository.getBatteryData();  // Repository'den veri alıyoruz
    return batteryData;
  } catch (error) {
    console.error('Veri servisi hatası:', error);
    throw error;
  }
};

module.exports = { getBatteryData };
