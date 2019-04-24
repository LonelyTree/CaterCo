require('../db/db')
const express = require("express")
const router = express.Router()
const admin = require('../Controllers/adminCtrl')
const nav = require('../Controllers/navCtrl')
const user = require('../Controllers/userCtrl')
const main = require('../Controllers/mainCtrl')


router.get('/editmenu/info', nav.infoGET)

router.get('/editmenu/orders', nav.ordersGET)

router.get('/editmenu', nav.menuGET)

router.post('/')

router.put('/')

router.delete('/')

module.exports = router;