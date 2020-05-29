const orm = require('../config/orm.js')

module.exports = {
  selectBurgers(cb) {
    orm.selectAll('burgers', burgers => cb(burgers))
  },
  insertBurger(burger, cb) {
    orm.insertOne('burgers', burger, info => cb(info))
  },
  updateBurger(changes, where, cb) {
    orm.updateOne('burgers', changes, where, info => cb(info))
  }
}