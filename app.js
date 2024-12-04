const express = require('express');
const app = express();
const batteryRoutes = require('./routes/batteryRoutes');  // Routes dosyasını içe aktarıyoruz
const authRoutes = require('./routes/authRoutes');
const User = require('./models/userModel'); // User modelini import et
const bcrypt = require('bcryptjs');

// Veritabanındaki tüm kullanıcıların şifrelerini hash'le
const updatePasswords = async () => {
  const users = await User.findAll();  // Tüm kullanıcıları al
  for (const user of users) {
    if (user.password) {  // Eğer kullanıcıda şifre varsa
      const hashedPassword = await bcrypt.hash(user.password, 10);  // Şifreyi hash'le
      await user.update({ password: hashedPassword });  // Güncelle
      console.log(`Kullanıcı ${user.username} için şifre güncellendi.`);
    }
  }
};



app.use(express.json());  // JSON verisi ile çalışabilmek için
app.use('/api', batteryRoutes);  // /api/battery_data gibi URL'lere yönlendirecek
app.use('/api/auth', authRoutes);
// Sunucu başlatma
app.listen(3000, () => {
  console.log('Sunucu 3000 portunda çalışıyor...');
});



