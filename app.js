const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World From Express and a PaaS')
})


app.listen(3000)