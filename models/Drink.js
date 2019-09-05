const Sequelize = require('sequelize');
const db = require('../config/database');

const Drink = db.define('drink', {
  drink_name: {
    type: Sequelize.STRING
  },
  drink_cost: { 
    type: Sequelize.DECIMAL
  },
})

module.exports = Drink;
