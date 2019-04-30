require('../db/db')
const Food = require('../models/food')
const User = require('../models/user')
const Constant = require('../models/const')
const Order = require('../models/orders')
const FoodModel = require('../models/foodConstant')
const mongoose = require("mongoose");

// MAIN PAGE
const main = (req, res) => {
    res.render('../Views/User/mainPage.ejs')
}

// GET CONFIRM PAGE
const confirm = async(req, res) => {
    try {
        const user = await User.findById(req.session.usersDbId)
            .populate('orders').exec()
        console.log(user.orders)
        res.render('../Views/User/confirmOrder.ejs', {
            orders: user.orders
        })
    } catch (err) {
        console.log(err)
    }
}

// GET THANK YOU PAGE
const thankyou = (req, res) => {
    res.render('../Views/User/thankYou.ejs')
}

// GET NEW ORDER PAGE
const neworder = async(req, res) => {
    let passfood = FoodModel
    res.render('../Views/User/newOrder.ejs', {
        categories: Constant.Categories,
        foods: passfood,
    })
}

// POST NEW ORDER
const createorder = async(req, res) => {

    try {
        const orderObj = {
            date: req.body.date,
            items: []
        }
        for (let i = 0; i < req.body.id.length; i++) {
            if (+req.body.quantity[i] <= 0) {
                continue;
            }
            const foodObj = {
                id: req.body.id[i],
                name: req.body.name[i],
                img: req.body.img[i],
                description: req.body.description[i],
                vegetarian: req.body.vegetarian[i],
                category: req.body.category[i],
                quantity: req.body.quantity[i]
            }

            const food = await Food.create(foodObj)
            orderObj.items.push(food.id)
        }
        const order = await Order.create(orderObj)
        order.save()
        const thisUser = await User.findById(req.session.usersDbId)
        thisUser.orders.push(order)
        thisUser.save();
        res.redirect('/caterco/main')
    } catch (err) {
        res.send(err)
    }
}




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
        for (let i = 0; i < Food.orders.length; i++) {
            const Order = await Food.orders
            const food = await Food.findByIdAndUpdate(req.params.id, req.body)
        }
    } catch (err) {}
}


// DELETE FOOD FROM ORDER
const deleteFromOrder = async(req, res) => {
    try {
        const food = await User.orders[date].findByIdAndDelete(req.params.id)
    } catch (err) {
        res.send(err)
    }
}

const editIndvOrder = async(req, res) => {
    try {


        const order = await Order.findById(req.params.id).populate('items').exec()
        res.render('../Views/User/editIndvOrder.ejs', {
            order,
            categories: Constant.Categories,
            foods: FoodModel
        })


    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    main,
    confirm,
    thankyou,
    neworder,
    addToOrder,
    createorder,
    editIndvOrder
}