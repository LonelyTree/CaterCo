const express = require("express");
const app = express();
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const logger = require("morgan");


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(logger("dev"));



app.listen(3000, err => {
    console.log(err || "Server is listening on port: ", 3000);
})