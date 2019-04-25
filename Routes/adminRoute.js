require('../db/db')
const express = require("express")
const router = express.Router()
const admin = require('../Controllers/adminCtrl')
const user = require('../Controllers/userCtrl')
const main = require('../Controllers/mainCtrl')


// GET SERVICES
router.get('/services', admin.service)

// GET USERS
router.get('/users', admin.users)

// GET ADMIN MENU
router.get('/', admin.admin)


router.delete('/')

router.put('/')

router.post('/')


module.exports = router;