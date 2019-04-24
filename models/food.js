const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true },
    price: { type: Number, required: true },
    description: String
});

const Food = mongoose.model("Food", foodSchema);

module.exports = Food;