const router = require('express').Router()
const Burger = require('../models/burger.js')

// GET all burgers
router.get('/burgers', (req, res) => Burger
  .selectBurgers(burgers => res.json(burgers)))

// POST one burger
router.post('/burgers', (req, res) => Burger
  .insertBurger(req.body, info => res.json(info)))

// PUT one burger
router.put('/burgers/:id', (req, res) => Burger
  .updateBurger(req.body, { id: req.params.id }, info => res.json(info)))

module.exports = router