require('../db/db')
const express = require("express")
const router = express.Router()
const main = require('../Controllers/mainCtrl')

// GET ARRIVAL PAGE
router.get("/", main.arrive)

// GET LOGIN PAGE
router.get("/login", main.login)

router.get('/logout', main.logout)

router.post('/')

router.put('/')

router.delete('/')

module.exports = router;