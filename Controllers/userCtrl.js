require('../db/db')
const Food = require('../models/food')
const User = require('../models/user')


// MAIN PAGE
const main = (req, res) => {
    res.render('../Views/User/mainPage.ejs')
}

const confirm = (req, res) => {
    res.render('../Views/User/confirmOrder.ejs')
}

const thankyou = (req, res) => {
    res.render('../Views/User/thankYou.ejs')
}


const neworder = (req, res) => {
    res.render('../Views/User/newOrder.ejs')
}


// NEW ORDER PAGE


// ADD FOOD TO ORDER
const addToOrder = async(req, res) => {
    try {

        const user = await User.find(req.sessions.username)
        user.orders[user.orders.length + 1].date.push(req.body.date).items.push(food._id)
        res.redirect('/caterco/main/neworder')
    } catch (err) {
        res.send(err)
    }
}

// UPDATE FOOD FROM ORDER

const updateFood = async(req, res) => {
    try {
        for (let i = 0; i < Food.Food.orders.length; i++) {
            if(){
            const Order = await Food.Food.orders
        }
        const food = await Food.Food.findByIdAndUpdate(req.params.id, req.body)
    }
    } catch (err) {

    }
}


// DELETE FOOD FROM ORDER
const deleteFromOrder = async(req, res) => {
    try {
        const food = await User.orders[date].findByIdAndDelete(req.params.id)
    } catch (err) {
        res.send(err)
    }
}
module.exports = {
    main,
    confirm,
    thankyou,
    neworder
}