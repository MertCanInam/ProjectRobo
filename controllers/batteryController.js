const batteryService = require('../services/batteryService');  // Service'i içe aktarıyoruz

// GET /battery_data endpoint
const getBatteryData = async (req, res) => {
  try {
    const { role, userId } = req.user;  // Auth middleware tarafından eklenen userId'yi alıyoruz
    const data = await batteryService.getBatteryData(role, userId);  // Veriyi alıyoruz
    res.json(data);  // Veriyi geri gönderiyoruz
  } catch (error) {
    res.status(500).send('Veri alınırken hata oluştu: ' + error.message);
  }
};

module.exports = {
  getBatteryData
};
