require('../db/db')
const express = require("express")
const router = express.Router()
const admin = require('../Controllers/adminCtrl')
const user = require('../Controllers/userCtrl')
const main = require('../Controllers/mainCtrl')


router.get('/confirm/thankyou', user.thankyouGET)

router.get('/confirm', user.confirmGET)

router.get('/', user.mainGET)

router.put('/')

router.delete('/')

module.exports = router;