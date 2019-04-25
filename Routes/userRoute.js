require('../db/db')
const express = require("express")
const router = express.Router()
const admin = require('../Controllers/adminCtrl')
const user = require('../Controllers/userCtrl')
const main = require('../Controllers/mainCtrl')


router.get('/confirm/thankyou', user.thankyou)

router.get('/confirm', user.confirm)

router.get('/', user.main)

router.put('/')

router.delete('/')



module.exports = router;