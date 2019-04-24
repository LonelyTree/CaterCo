require('../db/db')
const express = require("express")
const router = express.Router()
const admin = require('../Controllers/adminCtrl')
const user = require('../Controllers/userCtrl')
const main = require('../Controllers/mainCtrl')


// GET SERVICES
router.get('/adminmenu/services', admin.serviceGET)

// GET USERS
router.get('/adminmenu/users', admin.usersGET)

// GET ADMIN MENU
router.get('/adminmenu', admin.adminGET)


router.delete('/adminmenu')

router.put('/adminmenu')

router.post('/adminmenu')


module.exports = router;