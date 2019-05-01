require('../DB/DB')
const express = require("express")
const router = express.Router()
const Admin = require('../Controllers/adminCtrl')



// ADMIN MENU

// GET NEW SERVICES PAGE
router.get('/newservice', Admin.newFoodPage)

// MAKE NEW FOOD
router.post('/newservice', Admin.newFood);

// GET SERVICES
router.get('/services', Admin.editservice)

// DELETE SERVICES
router.delete('/deleteservice/:id', Admin.deleteService);

// GET UPDATE SERVICE PAGE
router.get('/updateservice/:id', Admin.updateServicePage)

// UPDATE SERVICES
router.put('/updateservice/:id', Admin.updateService)

// GET USERS
router.get('/users', Admin.fillUsers)

// GET ADMIN MENU
router.get('/', Admin.adminMenu);

router.delete("/users/:id", Admin.removeUsers);





module.exports = router;