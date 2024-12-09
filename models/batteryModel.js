const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Veritabanı bağlantısını import ediyoruz

const BatteryData = sequelize.define('BatteryData', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement:true
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
  voltage: {
    type: DataTypes.NUMERIC(10, 2),  // Voltage için NUMERIC(10,2) tipi
    allowNull: true,
  },
  current: {
    type: DataTypes.NUMERIC(10, 2),  // Current için NUMERIC(10,2) tipi
    allowNull: true,
  },
  temperature: {
    type: DataTypes.NUMERIC(5, 2),  // Temperature için NUMERIC(5,2) tipi
    allowNull: true,
  },
  capacity: {
    type: DataTypes.NUMERIC(10, 2),  // Capacity için NUMERIC(10,2) tipi
    allowNull: true,
  }

 
}, {
  tableName: 'battery_data',  // Veritabanındaki tablo adı
  timestamps: false,  // createdAt ve updatedAt kullanılmayacak
});

module.exports = { BatteryData };
