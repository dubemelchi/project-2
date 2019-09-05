const Sequelize = require('sequelize');
module.exports = new Sequelize('simplebar', 'root', 'password', {
  host: 'localhost',
  dialect: 'mysql',

});