const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/database');  // Veritabanı bağlantısını import ediyoruz

// User modelinin tanımlanması
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,  // Auto increment özelliği
  },
  username: {
    type: DataTypes.STRING(50),  // VARCHAR(50)
    allowNull: false,  // Boş olamaz
    unique: true,  // Kullanıcı adı benzersiz olmalı
  },
  password: {
    type: DataTypes.STRING(255),  // VARCHAR(255)
    allowNull: false,  // Boş olamaz
  },
  company: {
    type: DataTypes.STRING(100),  // VARCHAR(100)
    allowNull: true,  // Boş olabilir
  },
  role: {
    type: DataTypes.STRING(20),  // VARCHAR(20)
    allowNull: false,  // Boş olamaz
  },
}, {
  tableName: 'users',  // Veritabanındaki tablo adı
  timestamps: false,  // createdAt ve updatedAt kullanmayacağız
});

module.exports = { User };
