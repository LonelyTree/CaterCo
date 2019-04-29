const mongoose = require("mongoose");
const Food = require('./food')
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    payment: { type: String, required: true },
    email: { type: String, required: true },
    orders: [{
        date: { type: Date },
        items: [{
            quantity: Number,
            fooditem: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Food'
            },
        }]
    }],
    admin: { type: Boolean, default: false }
});

const User = mongoose.model("User", userSchema);

module.exports = User;