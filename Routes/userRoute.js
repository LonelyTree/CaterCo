require('../db/db')
const express = require("express")
const router = express.Router()
const user = require('../Controllers/userCtrl')

// MAIN PAGE

router.get('/confirm/thankyou', user.thankyou)

router.get('/confirm', user.confirm)

router.get('/', user.main)

// NEW ORDER PAGE

router.get('/neworder', user.neworder)

router.post('/neworder', user.createorder)


router.get('/editOrder/:id', user.editIndvOrder)


// UPDATE FOOD TO ORDER
router.put('/')
    // /caterco/main/addtoOrder

// DELETE FOOD TO ORDER
router.delete('/')





module.exports = router;