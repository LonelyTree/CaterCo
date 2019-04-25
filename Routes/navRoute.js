require('../db/db')
const express = require("express")
const router = express.Router()
const nav = require('../Controllers/navCtrl')


router.get('/info', nav.info)

router.get('/orders', nav.orders)

router.get('/', nav.menu)

router.post('/')

router.put('/')

router.delete('/')



module.exports = router;