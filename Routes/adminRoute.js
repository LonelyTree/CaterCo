require('../db/db')
const express = require("express")
const router = express.Router()
const Admin = require('../Controllers/adminCtrl')



// ADMIN MENU

// GET NEW SERVICES PAGE
router.get('/newservice', Admin.newFoodPage)

// MAKE NEW FOOD
router.post('/newservice', Admin.newFood);

// GET SERVICES
router.get('/services', Admin.editservice)

// GET USERS
router.get('/users', Admin.fillUsers)

// GET ADMIN MENU
router.get('/', Admin.adminMenu);





module.exports = router;