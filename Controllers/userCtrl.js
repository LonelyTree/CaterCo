require('../DB/DB')
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
const thankyou = async(req, res) => {
    try {
        const confirmed = await Order.findByIdAndUpdate(req.params.orderId, { $set: { confirmed: true } }, { new: true })
        console.log(confirmed)
        res.render('../Views/User/thankYou.ejs')
    } catch (err) {
        console.log(err)
    }
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

                // const food = await Food.create(foodObj)
                orderObj.items.push(foodObj)
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
    // VIEW CONFIRM ORDER PAGE
const viewIndvOrder = async(req, res) => {
    try {
        const order = await Order.findById(req.params.orderId)
        res.render('../Views/User/confirmIndvOrder.ejs', {
            order,
            categories: Constant.Categories,
            foods: FoodModel
        })
    } catch (err) {
        console.log(err)
    }
}

// VIEW UPDATE ORDER PAGE

const editOrder = async(req, res) => {
    try {
        const order = await Order.findById(req.params.orderId)
        res.render('../Views/Nav/editOrders.ejs', {
            order,
            categories: Constant.Categories,
            foods: FoodModel
        })
    } catch (err) {
        console.log(err)
    }
}

// MODIFY ORDER PAGE
const changeInitial = async(req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.orderId, { confirmed: false })
        for (let i = 0; i < order.items.length; i++) {
            if (order.items[i].id === req.body.id) {
                order.items[i].quantity = req.body.quantity
                order.save()
            }
        }
        order.markModified('items')
        order.save()
        res.redirect(`/caterco/main/confirm/${req.params.orderId}`)
    } catch (err) {
        console.log(err)
    }
}

// ADD SELECT FOOD TO ORDER
const addToOrder = async(req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.orderId, { confirmed: false })
        let array = []
        let foodObj;
        for (let i = 0; i < req.body.id.length; i++) {
            if (+req.body.quantity[i] <= 0) {
                continue;
            }
            if (req.body.id.length === 1) {
                foodObj = {
                    id: req.body.id,
                    name: req.body.name,
                    img: req.body.img,
                    description: req.body.description,
                    vegetarian: req.body.vegetarian,
                    category: req.body.category,
                    quantity: req.body.quantity
                }
            } else {
                foodObj = {
                    id: req.body.id[i],
                    name: req.body.name[i],
                    img: req.body.img[i],
                    description: req.body.description[i],
                    vegetarian: req.body.vegetarian[i],
                    category: req.body.category[i],
                    quantity: req.body.quantity[i]
                }
            }

            for (let j = 0; j < order.items.length; j++) {
                if (order.items[j].name === foodObj.name) {
                    order.items[j].quantity = +order.items[j].quantity + +foodObj.quantity
                    order.save()
                    break;
                } else if ((j === (order.items.length - 1) || j === order.items.length) && foodObj.name != order.items[j].name) {
                    array.push(foodObj)
                    break;
                }
            }
            if (order.items.length === 0) {
                array.push(foodObj)
            }
        }
        order.items = order.items.concat(array)
        order.markModified('items')
        order.save()
        res.redirect(`/caterco/main/confirm/${req.params.orderId}`)
    } catch (err) {
        console.log(err)
    }
}

// GET FOOD FROM CATEGORY TO ADD TO ORDER
const getCategory = async(req, res) => {
    try {
        const order = await Order.findById(req.params.orderId)
        res.render("../Views/Nav/editIndvOrder.ejs", {
            foods: FoodModel,
            categories: req.params.category,
            order
        })

    } catch (err) {
        res.send(err)
    }
}


// DELETE FOOD FROM ORDER
const deleteFromOrder = async(req, res) => {
    try {
        const order = await Order.findByIdAndUpdate(req.params.orderId, { $pull: { items: { _id: req.params.itemId } } }, { new: true })
        order.confirmed = false
        order.save()
        console.log(order)
        res.redirect(`/caterco/main/confirm/${req.params.orderId}`)

    } catch (err) {
        console.log(err)
    }
}







module.exports = {
    main,
    confirm,
    thankyou,
    neworder,
    createorder,
    viewIndvOrder,
    editOrder,
    getCategory,
    addToOrder,
    changeInitial,
    deleteFromOrder
}