const mongoose = require('mongoose');

const priceSchema = new mongoose.Schema({
    offer_price: new mongoose.Schema({
        currency: { type: String },
        value: { type: Number }
    }),
    regular_price: new mongoose.Schema({
        currency: { type: String },
        value: { type: Number }
    }),
    basket_price: new mongoose.Schema({
        currency: { type: String },
        value: { type: Number }
    })
})

module.exports = priceSchema;