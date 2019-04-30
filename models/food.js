const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: { type: String, require: true },
    img: { type: String, require: true },
    description: String,
    vegetarian: Boolean,
    category: { type: String, require: true },
    quantity: Number
});

const Food = mongoose.model('Food', foodSchema);
module.exports = Food;