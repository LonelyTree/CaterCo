require('../db/db')
const bcrypt = require('bcrypt')
const User = require('../models/user')
const Food = require('../models/food')



// USER ACCOUNT MENU

// GET ACCOUNT
const menu = (req, res) => {
    res.render('../Views/Nav/editMenu.ejs')
}

// INFO PAGE

// GET INFO
const info = async(req, res) => {
        try {
            const user = await User.findById(req.session.usersDbId)
            res.render('../Views/Nav/editInfo.ejs', {
                user
            })
        } catch (err) {
            releaseEvents.send(err)
        }
    }
    // UPDATE INFO
const updateInfo = async(req, res) => {
    try {
        if (req.body.password === undefined) {
            // delete(req.body.password)
            user = User.findById(req.session.usersDbId)
            req.body.password = user.password
            const updatedUser = await User.findByIdAndUpdate(req.session.usersDbId, req.body, { new: true })
            res.redirect('/caterco/edit')
        } else {
            req.body.password = await bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
            const updatedUser = await User.findByIdAndUpdate(req.session.usersDbId, req.body, { new: true })
            res.redirect("/caterco/edit")
        }
    } catch (err) {
        res.send(err)
    }
}





// ORDER INFO PAGE

// GET ORDERS
const orders = (req, res) => {
    res.render('../Views/Nav/editOrders.ejs')
}


module.exports = {
    menu,
    info,
    orders,
    updateInfo
}