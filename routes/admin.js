const express = require('express');

const router = express.Router();

router.get('/add-product', (req, res,next) => {
    console.log('In the middleware');
    res.send('<form action="/admin/products" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

router.post('/products', (req, res,next) => {
    console.log(req.query);
    res.redirect('/');
});


module.exports = router;