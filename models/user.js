const mongoose = require("mongoose");
const Food = require('./food')
const userSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    payment: { type: Number, required: true },
    email: { type: String, required: true },
    orders: [{
        date: { type: String },
        items: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Food'
        }]
    }]


    ,
    admin: Boolean
});

const User = mongoose.model("User", userSchema);

module.exports = User;