require('../db/db')
const express = require("express")
const router = express.Router()
const Main = require('../Controllers/mainCtrl')
const Auth = require('../Controllers/authCtrl')



// GET ARRIVAL PAGE
router.get("/", Main.arrive)

// GET MENU PAGE
router.get('/menu', Main.menu)

// GET SERVICES PAGE
router.get('/services', Main.services)

// GET LOGIN PAGE
router.get("/login", Main.login)

// LOGOUT USER
router.post('/logout', Main.logout)

// VALIDATE USER CREDENTIALS
router.post("/login", Auth.validate)


//iFrame get
router.get("/showServices",Main.serviFrame)

// CREATE USER
router.post("/register", Auth.createUser)

router.post('/')

router.put('/')

router.delete('/')

module.exports = router;