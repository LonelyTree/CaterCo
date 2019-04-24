require('../db/db')
const express = require("express")
const router = express.Router()
const admin = require('../Controllers/adminCtrl')
const user = require('../Controllers/userCtrl')
const main = require('../Controllers/mainCtrl')
require('./adminRoute')
require('./navRoute')
require('./userRoute')

// GET ARRIVAL PAGE
router.get("/", main.arrive)

// GET LOGIN PAGE
router.get("/login", main.login)

router.get('/logout',main.logout)

router.post('/')

router.put('/')

router.delete('/')

module.exports = router;