const express = require('express')
const app = express()
// const port = 3030
require('dotenv').config()
const port = process.env.PORT


const data = {
  "name": "Maaz",
  "age": 25,
}

app.get('/data', function(req, res){
  res.json(data)
})

app.get('/instagram', function(req, res){
  res.send('Instagram Page')
})

app.get('/login', function(req, res){
  res.send('Login Page')
})

app.get('/register', function(req, res){
  res.send('Register Page')
})

app.get('/home', function(req, res){
  res.sendFile(__dirname + '/index.html')
})


app.get('/', function(req,res){
  res.send("Hello, World!")
})

app.listen(port, function(){ 
  console.log(`Server running on localhost:${port}` )}
)

