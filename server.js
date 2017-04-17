const express = require('express');
const app = express();

app.listen(4000, function() {
  console.log('listening on 4000')
})

app.get('/', (req, res) => {
  res.send('hello world');
})

app.get('/main', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
  console.log('Hellooooooooooooooooo!')
})

console.log('Start the server');
