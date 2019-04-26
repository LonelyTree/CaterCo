require('../db/db')
const express = require("express")
const router = express.Router()
const admin = require('../Controllers/adminCtrl')


// GET SERVICES
//router.get('/services', admin.service)

// GET USERS
//router.get('/users', admin.users)

// GET ADMIN MENU
//router.get('/', admin.admin);
router.get('/newFood', admin.createFood)
router.post('/newFood', admin.newFood);
router.delete('/')

router.put('/')

router.post('/')


module.exports = router;