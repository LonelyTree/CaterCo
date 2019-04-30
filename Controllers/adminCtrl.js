require('../db/db')
const Food = require("../models/food")
const Users = require("../models/user")
const Constant = require('../models/const')

const editservice = async(req, res) => {
    try {
        const passfood = await Food.find({})
        res.render('../Views/Admin/editServices.ejs', {
            foods: passfood,
            categories: Constant.Categories,
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
const removeUsers = async (req, res) => {
    
    try {
        const deletedUser = await Users.findByIdAndRemove(req.params.id);
        res.redirect("/caterco/admin/users")
    } catch (err) {
        res.send(err);
    }

}

// GET MENU
const adminMenu = async (req, res) => {
   res.render('../Views/Admin/adminMenu.ejs')
  
}


// GET SERVICES PAGE


// GET NEW SERVICES PAGE
const newFoodPage = (req, res) => {
    res.render('../Views/Admin/newService.ejs', {
        categories: Constant.Categories,
    })
}

// DELETE SERVICE
const deleteService = async(req, res) => {
      try{
        const deletedService = await Food.findByIdAndRemove(req.params.id);
        res.redirect("/caterco/admin/services");
      } catch(err){
          res.send(err);
      }
    }
// GET UPDATE PAGE
const updateServicePage = async(req, res) => {
    try {
        const service = await Food.findById(req.params.id)
        const categories = Constant.Categories
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
        const updated = await Food.findByIdAndUpdate(req.params.id, req.body)
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
        const food = await Food.create(req.body)
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
    deleteService,
    updateServicePage,
    updateService
}