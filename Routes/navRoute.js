require('../db/db')
const express = require("express")
const router = express.Router()
const Nav = require('../Controllers/navCtrl')


router.get('/info', Nav.info)

router.put('/', Nav.updateInfo)

router.get('/orders', Nav.orders)

router.get('/', Nav.menu)

router.post('/')

router.put('/')

router.delete('/')



module.exports = router;