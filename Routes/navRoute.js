require('../db/db')
const express = require("express")
const router = express.Router()
const admin = require('../Controllers/adminCtrl')
const nav = require('../Controllers/navCtrl')
const user = require('../Controllers/userCtrl')
const main = require('../Controllers/mainCtrl')


router.get('/info', nav.infoGET)

router.get('/orders', nav.ordersGET)

router.get('/', nav.menuGET)

router.post('/')

router.put('/')

router.delete('/')



module.exports = router;