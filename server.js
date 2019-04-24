const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require("express-session");

const mainRouter = require("./Routes/mainRoute");
const adminRouter = require('./Routes/adminRoute')
const navRouter = require('./Routes/navRoute')
const userRouter = require('./Routes/userRoute')

const authCtrl = require("./Controllers/authCtrl");

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
app.use(logger("dev"));

app.use(session({
    secret: "This is a secret that only we know so do not tell anyone",
    resave: false,
    saveUninitialized: false
}));

app.use("/caterco", mainRouter);
app.use("/caterco/admin", adminRouter);
app.use("/caterco/edit", navRouter);
app.use("/caterco/main", userRouter);






app.listen(3000, err => {
    console.log(err || "Server is listening on port: ", 3000);
})