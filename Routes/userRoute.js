require('../DB/DB')
const express = require("express")
const router = express.Router()
const user = require('../Controllers/userCtrl')

// MAIN PAGE

router.get('/confirm/:orderId/thankyou', user.thankyou)

router.get('/confirm', user.confirm)

router.get('/', user.main)

// NEW ORDER PAGE

router.get('/neworder', user.neworder)

router.post('/neworder', user.createorder)

// VIEW INDIVIDUAL ORDER
router.get('/confirm/:orderId', user.viewIndvOrder)

// EDIT ORDER
router.get('/editOrder/:orderId', user.editOrder)

// UPDATE NUMBERS ON START ORDER PAGE
router.put('/editOrder/:orderId', user.changeInitial)

// GET UPDATES FOR CATEGORIES OF ORDER
router.get('/editOrder/:category/:orderId', user.getCategory)

// ADD UPDATES FOR CATEGORIES TO ORDER
router.put('/editOrder/:category/:orderId', user.addToOrder)

// DELETE FOOD FROM ORDER
router.delete('/editOrder/:orderId/:itemId', user.deleteFromOrder)





module.exports = router;