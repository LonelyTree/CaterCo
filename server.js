const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require("body-parser");
const logger = require("morgan");
const session = require("express-session");
const userRouter = require("./Routes/userRoute");
const mainRouter = require("./Routes/mainRoute");
const adminRouter = require("./Routes/adminRoute");


app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride("_method"));
app.use(logger("dev"));

app.use("/userRoute", userRouter);
app.use("/mainRoute", mainRouter);
app.use("/adminRoute", adminRouter);



app.listen(3000, err => {
    console.log(err || "Server is listening on port: ", 3000);
})