const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/in', async(req, res) => {
    const product = await Product
        .find({ "stock.available": true })
        .select('name -_id url description')
    res.send(product);
});

router.get('/out', async(req, res) => {
    const product = await Product
        .find({ "stock.available": false })
        .select('name -_id url description')
    res.send(product);
});

module.exports = router;