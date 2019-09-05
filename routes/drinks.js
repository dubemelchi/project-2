const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Drink = require('../models/Drink');

router.get('/', (req, res) => 
Drink.findAll()
  .then(drinks => {
    console.log(drinks);
    res.sendStatus(200);
  })
  .catch(err => console.log(err)));

module.exports = router;

// add drink
router.get('/add', (req, res) => {
  const data = {
    drink_name: 'Modelo',
    drink_cost: 8.00
  }


let { drink_name, drink_cost } = data;

// insert into table
Drink.create({
  drink_name,
  drink_cost
})
.then(drink => res.redirect('/drinks'))  
.catch(err => console.log(err));
});
