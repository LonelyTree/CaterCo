require("../DB/DB")
const Auth = require('../Controllers/authCtrl')
const Food = require('../models/food')
const Constant = require('../models/const')
const FoodModel = require('../models/foodConstant')


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
    res.render("../Views/preview.ejs", {
        foods: FoodModel
    })
}

const serviFrame = async(req, res) => {
    res.render("../Views/showServices.ejs", {
        categories: Constant.Categories,
        foods: FoodModel
    })
}

// LOGIN PAGE
const login = (req, res) => {

    if (req.session.logged === true) {
        res.redirect("/caterco/main")
    } else {
        res.render("../Views/loginPage.ejs", {
            message: req.session.message
        })
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
    menu,
    serviFrame
}