const express = require('express');
const app = express();
const batteryRoutes = require('./routes/batteryRoutes');  // Routes dosyasını içe aktarıyoruz
const authRoutes = require('./routes/authRoutes');




app.use(express.json());  // JSON verisi ile çalışabilmek için
app.use('/api', batteryRoutes);  // /api/battery_data gibi URL'lere yönlendirecek
app.use('/api/auth', authRoutes);
// Sunucu başlatma
app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor...');
});



