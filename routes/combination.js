const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/instock/:brand', async(req, res) => {
    const brand = req.params.brand;
    const regex = new RegExp(".*" + brand + ".*", "i")
    const product = await Product
        .find()
        .and({ "brand.name": regex }, { "stock.available": true })
        .select('name -_id url description')
    console.log(product);
    res.send(product);
});
router.get('/:brand/:date/:discount/instock', async(req, res) => {
    const brand = req.params.brand;
    const regex = new RegExp(".*" + brand + ".*", "i")
    let product = await Product
        .find()
        .and({ "brand.name": regex }, { created_at: req.params.date }, { "price.offer_price.value": { $lt: req.params.discount } }, { "stock.available": true })
        .select('name price stock created_at -_id')
    console.log(product);
    res.send(product);
});

module.exports = router;