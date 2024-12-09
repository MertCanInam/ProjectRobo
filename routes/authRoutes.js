// routes/authRoutes.js
const express = require('express');
const { login } = require('../controllers/authController');
const { register } = require('../controllers/authController');  // register fonksiyonunu doğru bir şekilde import ediyoruz


const router = express.Router();

// Login işlemi
router.post('/login', login);
router.post('/register', register);


module.exports = router;

