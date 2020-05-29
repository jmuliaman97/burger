const connection = require('./connection.js')

module.exports = {
  selectAll(table, cb) {
    connection.query(`SELECT * FROM ${table}`, (err, data) => {
      if (err) { console.log(err) }
      cb(data)
    })
  },
  insertOne(table, data, cb) {
    connection.query(`INSERT INTO ${table} SET ?`, data, (err, info) => {
      if (err) { console.log(err) }
      cb(info)
    })
  },
  updateOne(table, changes, where, cb) {
    connection.query(`UPDATE ${table} SET ? WHERE ?`, [changes, where], (err, info) => {
      if (err) { console.log(err) }
      cb(info)
    })
  }
}

