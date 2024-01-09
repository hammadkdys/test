const express = require('express')
const app = express();
const path = require('path');
require('dotenv').config();
const port = process.env.PORT||3000;


app.use(express.static(path.resolve(__dirname, 'vitetest/dist')));

app.get('/hammad', (req, res) => {
  res.send('Hello World!')
})

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'vitetest/dist', 'index.html'));
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})