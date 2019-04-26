const mongoose = require('mongoose');

const foodSchema = mongoose.Schema({
  name:{type:String, require:true},
  quantity:Number,
  description:String,
  vegetarian:Boolean,
  category:String
});

const Food = mongoose.model('Food', foodSchema);
const Categories =["Salads","Appetizers","Sandwiches","Big Entrees","Drinks"];
module.exports = {Food, Categories};
