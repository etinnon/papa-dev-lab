const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const port = (process.env.PORT || 3000)

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));

let myVaraibleServer = 'soft coded server data';

app.get('/view', function (req, res) {
  res.render('index', {'myVariableClient': myVaraibleServer});
})

app.post('/postClientData', function (req, res) {
  
  console.log("body:",req.body)
  console.log("user Name:", req.body.userName);
  res.render('index', {'myVariableClient': req.body.userName});
})

app.get('/', function (req, res) {
  res.send('Hello World From Express and a PaaS')
})



app.get('/index', function (req, res) {
  res.sendFile(__dirname + '/index.html');
})


//app.listen(3000)

app.listen ( port, () => console.log (`Server is running on.. ${port }`));