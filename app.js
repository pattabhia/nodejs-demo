const http = require('http');
const express = require('express');
const app = express();

app.use('/add-product', (req, res,next) => {
    console.log('In the middleware');
    res.send('<form action="/products"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/products', (req, res,next) => {
    console.log(req.query);
    res.redirect('/');
});

app.use('/', (req, res) => {
  res.send('Hello World');
});

const server = http.createServer(app).listen(3000, () => {
    console.log('Server is running on port 3000');
});