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

// VIEW INDIVIDUAL ORDER
router.get('/confirm/:orderId', user.viewIndvOrder)

// EDIT ORDER
router.get('/editOrder/:orderId', user.editOrder)

// GET UPDATES FOR CATEGORIES OF ORDER
router.get('/editOrder/:category/:orderId', user.getCategory)

// UPDATE NUMBERS ON START ORDER PAGE
router.put('/editOrder/:orderId', user.changeInitial)

// ADD UPDATES FOR CATEGORIES TO ORDER
router.put('/editOrder/:category/:orderId', user.addToOrder)

///<%=order._id%>?_method=PUT

// DELETE FOOD FROM ORDER
router.delete('/editOrder/:orderId')
    // /editOrder/<%=order.items[j].id%>?_method=DELETE





module.exports = router;