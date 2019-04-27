require('../db/db')
const Food = require("../models/food")
const Users = require("../models/user")

const editservice = (req, res) => {
    res.render('../Views/Admin/editServices.ejs')
}

// EDIT USER PAGE

// GET
const fillUsers = async(req, res) => {
    try {
        const userList = await Users.find({})
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
        const userList = await Users.find({})
    } catch (err) {
        res.send(err)
    }

}

// GET MENU
const adminMenu = (req, res) => {
    res.render('../Views/Admin/adminMenu.ejs')
}


// GET SERVICES PAGE

// GET SERVICES PAGE

// GET NEW SERVICES PAGE
const newFoodPage = async(req, res) => {
    res.render('../Views/Admin/newService.ejs', {
        categories: Food.Categories
    })
}

// MAKE NEW SERVICE
const newFood = async(req, res) => {
    try {
        if (req.body.vegetarian === 'on') {
            req.body.vegetarian = true;
        } else {
            req.body.vegetarian = false
        }
        const food = await Food.Food.create(req.body)
        res.redirect('/caterco/admin/services')
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    editservice,
    fillUsers,
    adminMenu,
    removeUsers,
    newFoodPage,
    newFood
}