require('dotenv').config();

const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(process.env.PORT);



//C:\Users\WINDOWS10\Documents\Jonnathan Green\Cursos\N ode.js\Seccion8_RestServer