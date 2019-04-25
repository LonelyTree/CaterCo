require('../db/db')
const Food = require("../models/food")

const service = (req, res) => {
    res.render('../Views/Admin/editServices.ejs')
}

const users = (req, res) => {
    res.render('../Views/Admin/editUsers.ejs')
}

const admin = (req, res) => {
    res.render('../Views/Admin/adminMenu.ejs')
}

const newFood = async(req, res) => {
    try {
        Food.create(req.body)
        res.redirect('../Views/Admin/editServices.ejs')
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    service,
    users,
    admin
}