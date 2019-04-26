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
        const userList =await Users.find({})
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
        const userList =await Users.find({})
    } catch (err) {
        res.send(err)
    }

}

const adminMenu = (req, res) => {
    res.render('../Views/Admin/adminMenu.ejs')
}
const createFood =async(req,res)=>{
    res.render('../Views/Admin/newService.ejs',{
        categories:Food.Categories
    })


}
const newFood = async(req, res) => {
    try {
        if(req.body.vegetarian === 'on'){
            req.body.vegetarian = true;
          } else {
            req.body.vegetarian = false
          }
        await Food.create(req.body)
        res.redirect('../Views/Admin/adminMenu.ejs')
    } catch (err) {
        res.send(err)
    }
}

module.exports = {
    service,
    fillUsers,
    adminMenu,
    removeUsers,
    newFood,
    createFood
}