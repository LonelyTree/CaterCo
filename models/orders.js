const mongoose = require('mongoose');
const Food = require('./food')

const ordersSchema = new mongoose.Schema({
    date: String,
    items: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }]
});


const Order = mongoose.model('Order', ordersSchema);
module.exports = Order;