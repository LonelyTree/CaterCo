require('../db/db')
const express = require("express")
const router = express.Router()
const user = require('../Controllers/userCtrl')



router.get('/confirm/thankyou', user.thankyou)

router.get('/confirm', user.confirm)

router.get('/', user.main)

router.get('/neworder',user.neworder)

router.put('/')

router.delete('/')



module.exports = router;