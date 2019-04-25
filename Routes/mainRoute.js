require('../db/db')
const express = require("express")
const router = express.Router()
const Main = require('../Controllers/mainCtrl')
const Auth = require('../Controllers/authCtrl')



// GET ARRIVAL PAGE
router.get("/", Main.arrive)

// GET LOGIN PAGE
router.get("/login", Main.login)

// LOGOUT USER
router.get('/logout', Main.logout)

// VALIDATE USER CREDENTIALS
router.post("/login", Auth.validate)

// CREATE USER
router.post("/register", Auth.createUser)

router.post('/')

router.put('/')

router.delete('/')

module.exports = router;