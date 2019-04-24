require('../db/db')
const express = require("express")
const router = express.Router()
const mainCtrl = require('../Controllers/mainCtrl')

// GET ARRIVAL PAGE
router.get("/", mainCtrl.arriveGET)

// GET LOGIN PAGE
router.get("/login", mainCtrl.loginGET)


router.post()

router.put()

router.delete()