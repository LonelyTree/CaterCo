require('../db/db')
const express = require("express")
const router = express.Router()
const Admin = require('../Controllers/adminCtrl')



// ADMIN MENU

// GET NEW SERVICE
router.get('/newservice', Admin.newFoodPage)

// GET SERVICES
router.get('/services', Admin.service)

// GET USERS
router.get('/users', Admin.fillUsers)

// GET ADMIN MENU
router.get('/', Admin.adminMenu);

// NEW FOOD PAGE
router.get('/newFood', Admin.createFood)
router.post('/newFood', Admin.newFood);



module.exports = router;