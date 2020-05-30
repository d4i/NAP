const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/:name', async(req, res) => {
    const name = req.params.name;
    const regex = new RegExp(".*" + name + ".*", "i")
    const product = await Product
        .find({ "brand.name": regex })
        .select('name -_id brand.name description');
    console.log(product);
    res.send(product);
});

module.exports = router;