const router = require('express').Router()

router.use('/api', require('./burgers_controller.js'))

module.exports = router