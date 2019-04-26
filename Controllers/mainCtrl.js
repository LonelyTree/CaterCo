require("../db/db")
const Auth = require('../Controllers/authCtrl')



// ARRIVAL PAGE
const arrive = (req, res) => {
    res.render("../Views/arrivalPage.ejs")
}

// MENU PAGE
const menu = (req, res) => {
    res.render("../Views/menu.ejs")
}

// SERVICES PAGE
const services = (req, res) => {
    res.render("../Views/preview.ejs")
}

// LOGIN PAGE
const login = (req, res) => {
    if (req.session.logged === true) {
        res.redirect("/caterco/main")
    } else {
        res.render("../Views/loginPage.ejs", {
            message: req.session.message
        })
        if (req.body.username === req.body.admin){
            res.redirect("/caterco/admin")
        } else {
            res.redirect("caterco/login")
        }
    }
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
    logout,
    services,
    menu
}