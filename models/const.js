const mongoose = require("mongoose");

let d = new Date();
let year = d.getFullYear();
let month = d.getMonth()+1;
let day = d.getDate();
const Today = `${year}-${month}-${day}`





module.exports = Today;