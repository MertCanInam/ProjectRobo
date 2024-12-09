const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Veritabanı bağlantısını import ediyoruz

const BatteryData = sequelize.define('BatteryData', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  battery_level: {
    type: DataTypes.INTEGER,
    allowNull: false,  // Boş olamaz
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,  // Boş olamaz
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,  // Boş olamaz
    references: {
      model: 'users',  // Bu, users tablosuna referans verir
      key: 'id',  // user_id'nin, users tablosundaki id'ye bağlanması gerekir
    },
  },
 
}, {
  tableName: 'battery_data',  // Veritabanındaki tablo adı
  timestamps: false,  // createdAt ve updatedAt kullanılmayacak
});

module.exports = { BatteryData };
