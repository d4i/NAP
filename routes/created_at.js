const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router.get('/ondate/:date', async(req, res) => {
    const product = await Product
        .find({ created_at: req.params.date })
        .select('name -_id url description')
    console.log(product);
    res.send(product);
});

router.get('/between/:afterDate/:beforeDate', async(req, res) => {
    const product = await Product
        .find({ created_at: { $gte: req.params.afterDate, $lte: req.params.beforeDate } })
        .select('name -_id url description')
    console.log(product);
    res.send(product);
});

router.get('/before/:date', async(req, res) => {
    const product = await Product
        .find({ created_at: { $lt: req.params.date } })
        .select('name -_id url description');
    console.log(product);
    res.send(product);
});

router.get('/after/:date', async(req, res) => {
    const product = await Product
        .find({ created_at: { $gt: req.params.date } })
        .select('name -_id url description')
    console.log(product);
    res.send(product);
});

module.exports = router;