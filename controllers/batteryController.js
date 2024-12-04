const batteryService = require('../services/batteryService');  // batteryService'i import ediyoruz

const getBatteryData = async (req, res) => {
  try {
    const batteryData = await batteryService.getBatteryData();  // Service katmanından veri alıyoruz
    if (batteryData && batteryData.length > 0) {
      res.status(200).json(batteryData);  // Veriyi JSON formatında döndürüyoruz
    } else {
      res.status(404).json({ message: 'Veri bulunamadı' });  // Eğer veri yoksa 404 döndür
    }
  } catch (error) {
    console.error('Controller hatası:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = { getBatteryData };
