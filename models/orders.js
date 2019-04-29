const mongoose = require('mongoose');
const Food = require('./food')
const ordersSchema = mongoose.Schema({
    orders: [{
        date: String,
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Food'
    }]
});

const Orders = mongoose.model('Order', ordersSchema);
module.exports = { Orders };
