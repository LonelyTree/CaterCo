require('../db/db')
const Food = require("../models/food")
const Users = require("../models/user")

const service = (req, res) => {
    res.render('../Views/Admin/editServices.ejs')
}

// EDIT USER PAGE

// GET
const fillUsers = async(req, res) => {
    try {
        const userList = Users.find({})
        res.render('../Views/Admin/editUsers.ejs', {
            users: userList
        })
    } catch (err) {
        res.send(err)
    }

}

// DELETE
const removeUsers = async(req, res) => {
    try {
        const userList = Users.find({})
    } catch (err) {
        res.send(err)
    }

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
    fillUsers,
    admin,
    removeUsers
}