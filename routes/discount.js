const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/gt/:discount', async(req, res) => {
    // TODO: 
    // const discount = req.params.discount;
    // regular_price = Product.price.regular_price.value;
    // console.log(regular_price);
    // const offer_price = regular_price - ((discount / 100) * regular_price);

    const product = await Product
        .find({ "price.offer_price.value": { $gt: offer_price } })
        .select('-_id name description price')
    res.send(product);
});

router.get('/lt/:discount', async(req, res) => {
    const product = await Product
        .find({ "price.offer_price.value": { $lt: req.params.discount } })
        .select('-_id name description price')
    res.send(product);
});

router.get('/eq/:discount', async(req, res) => {
    const product = await Product
        .find({ "price.offer_price.value": { $eq: req.params.discount } })
        .select('-_id name description price')
    res.send(product);
});

module.exports = router;