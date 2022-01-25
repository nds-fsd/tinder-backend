
const express = require('express')
const mongo = require('./mongo/mongo');
const app = express()
const port = 5001

app.get('/', (req, res) => {
  res.send('Hellffewo World!')
})

app.listen(port, () => {
  console.log(`servidor iniciado en http://localhost:${port}`)
})