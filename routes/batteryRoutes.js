const express = require('express');
const router = express.Router();
const batteryController = require('../controllers/batteryController');  // Controller'ı import ediyoruz
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');


// Batarya verilerini almak için GET isteği
router.get(
  '/battery_data',
  authMiddleware,
  roleMiddleware(['user', 'admin','maintainer']),  // Admin ve User rolü ile erişilebilir
  batteryController.getBatteryData
);

module.exports = router;
