const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(require('./controllers'))

app.listen(3000, () => console.log('http://localhost:3000'))