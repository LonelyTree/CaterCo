require('../db/db')
const express = require("express")
const router = express.Router()
const admin = require('../Controllers/adminCtrl')
const nav = require('../Controllers/navCtrl')
const user = require('../Controllers/userCtrl')
const main = require('../Controllers/mainCtrl')


router.get('/info', nav.info)

router.get('/orders', nav.orders)

router.get('/', nav.menu)

router.post('/')

router.put('/')

router.delete('/')



module.exports = router;