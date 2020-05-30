const mongoose = require('mongoose');
const priceSchema = require('./price');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 1024,
        trim: true
    },
    url: {
        type: String,
        min: 3,
        max: 1024
    },
    brand: new mongoose.Schema({
        name: { type: String },
        sub_brand: { type: String },
    }),
    price: priceSchema,
    description: {
        type: String,
        min: 5
    },
    similar_products: new mongoose.Schema({
        meta: new mongoose.Schema({
            total_result: { type: Number },
            min_price: priceSchema,
            max_price: priceSchema,
            avg_price: priceSchema,
            avg_discount: { type: Number }
        }),

    }),
    created_at: { type: Date },
    updated_at: { type: Date },
    stock: new mongoose.Schema({
        available: Boolean
    })
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;