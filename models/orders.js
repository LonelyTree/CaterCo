const mongoose = require('mongoose');
const Food = require('./food')

const foodSchema = new mongoose.Schema({
    name: { type: String, require: true },
    img: { type: String, require: true },
    description: String,
    vegetarian: Boolean,
    category: { type: String, require: true },
    quantity: Number
});

const ordersSchema = new mongoose.Schema({
    date: String,
    items: [foodSchema]
});


const Order = mongoose.model('Order', ordersSchema);
module.exports = Order;