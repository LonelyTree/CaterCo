require('../db/db')
const mongoose = require("mongoose");




const Constants = {

  
Date:{
  d:new Date(),
  year:d.getFullYear(),
  month:d.getMonth()+1,
  day:d.getDate(),
  Today:`${year}-${month}-${day}`
},


Categories: ["Salads", "Appetizers", "Sandwiches", "Big Entrees", "Drinks"],

}
module.exports = Constant

