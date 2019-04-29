require('../db/db')
const Food = require("../models/food")
const Users = require("../models/user")

const editservice = async(req, res) => {
    try {
        const passfood = await Food.Food.find({})
        res.render('../Views/Admin/editServices.ejs', {
            foods: passfood,
            categories: Food.Categories
        })
    } catch (err) {
        res.send(err)
    }

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


// GET NEW SERVICES PAGE
const newFoodPage = (req, res) => {
    res.render('../Views/Admin/newService.ejs', {
        categories: Food.Categories
    })
}

// DELETE SERVICE
// const deleteService = async(req, res) => {
//         try {
//             console.log(req.params.id)
//             const foundUsers = await Users.update({ 'orders.items.fooditem': req.params.id }, { $pull: { fooditem: req.params.id } }, { multi: true })
//             console.log(foundUsers)
//         } catch (err) {
//             console.log(err)
//         }
//     }
// GET UPDATE PAGE
const updateServicePage = async(req, res) => {
    try {
        const service = await Food.Food.findById(req.params.id)
        const categories = await Food.Categories
        res.render('../Views/Admin/updateService.ejs', {
            service,
            categories
        })

    } catch (err) {
        res.send(err)
    }

}

// UPDATE SERVICE
const updateService = async(req, res) => {
    try {
        if (req.body.vegetarian === 'on') {
            req.body.vegetarian = true;
        } else {
            req.body.vegetarian = false
        }
        const updated = await Food.Food.findByIdAndUpdate(req.params.id, req.body)
        res.redirect('/caterco/admin/services')
    } catch (err) {
        res.send(err)
    }
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
    newFood,
    // deleteService,
    updateServicePage,
    updateService
}