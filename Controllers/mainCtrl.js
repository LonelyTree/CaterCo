require("../db/db")

// ARRIVAL PAGE
const arriveGET = (req, res) => {
    res.render("../Views/arrivalPage.ejs")
}


// LOGIN PAGE
const loginGET = (req, res) => {
    res.render("../Views/loginPage.ejs")
}



module.exports = {
    arriveGET,
    loginGET
}