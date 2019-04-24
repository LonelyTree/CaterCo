require('../db/db')
const express = require("express")
const router = express.Router()
const admin = require('../Controllers/adminCtrl')
const user = require('../Controllers/userCtrl')
const main = require('../Controllers/mainCtrl')


// GET SERVICES
router.get('/services', admin.serviceGET)

// GET USERS
router.get('/users', admin.usersGET)

// GET ADMIN MENU
router.get('/', admin.adminGET)


router.delete('/')

router.put('/')

router.post('/')


module.exports = router;