require("../db/db")
const Auth = require('../Controllers/authCtrl')
    // ARRIVAL PAGE
const arrive = (req, res) => {
    res.render("../Views/arrivalPage.ejs")
}


// LOGIN PAGE
const login = (req, res) => {
    // req.session.message = 'hi'
    res.render("../Views/loginPage.ejs", {
        message: req.session.message
        
    })
}

const logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            res.send(err)
        } else {
            res.redirect('/caterco')
        }
    })
}


module.exports = {
    arrive,
    login,
    logout
}