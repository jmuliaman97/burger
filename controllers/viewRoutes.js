const router = require('express').Router()
const Burger = require('../models/burger.js')

router.get('/', (req, res) => {
  Burger.selectBurgers((burgers) => {
    // if devoured burger = 0 push burger to devour array else if != 0 push burger to devoured array
    let devour = []
    let devoured = []
    burgers.forEach((burger) => {
      if (burger.devoured === 0) {
        devour.push(burger)
      } else {
        devoured.push(burger)
      }
    })
    // pass in the devour and devoured object so we're handing the views the data
    res.render('index', { devour, devoured })
  })
})

module.exports = router