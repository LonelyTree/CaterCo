require('../db/db')
const Food = require('../models/food')
const User = require('../models/user')
const mongoose = require("mongoose");

// MAIN PAGE
const main = (req, res) => {
    res.render('../Views/User/mainPage.ejs')
}

const confirm = async(req, res) => {
    try {
        const user = await User.findById(req.session.usersDbId)

        // for (let i = 0; i < user.orders.length; i++) {
        //     orders[i].date
        // }
        res.render('../Views/User/confirmOrder.ejs', {
            orders: user.orders
        })
    } catch (err) {
        res.send(err)
    }
}

const thankyou = (req, res) => {
    res.render('../Views/User/thankYou.ejs')
}


const neworder = async(req, res) => {
    let passfood = await Food.Food.find({})
    res.render('../Views/User/newOrder.ejs', {
        categories: Food.Categories,
        foods: passfood,
    })
}

const createorder = async(req, res) => {
    //console.log(req.body)
    //create a temp new order object
    let theOrder = {
        date: {},
        items: []
    };


    //add the date to the object
    theOrder.date = req.body.thedate;
    //add all non zero quantity to order
    for (let i = 0; i < req.body.id.length; i++) {
        let theItem = {}
            //build food to push
            // let theItem = {
            //     quantity: Number,
            //     fooditem: {
            //         type: mongoose.Schema.Types.ObjectId,
            //         ref: 'Food'
            //     }
            // };

        let thefood = await Food.Food.findById(req.body.id[i])
        theItem.fooditem = thefood;
        theItem.quantity = req.body.qty[i]
        theOrder.items.push(theItem);


    }
    //console.log("THIS IS THE ORDER BEFORE IT GETS ADDED\n"+theOrder+"\n")
    try {
        const thisUser = await User.findById(req.session.usersDbId)
            //console.log(thisUser)
        thisUser.orders.push(theOrder)
        thisUser.save();
        //console.log(thisUser.orders);

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
        for (let i = 0; i < Food.Food.orders.length; i++) {




            const Order = await Food.Food.orders

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
    neworder,
    addToOrder,
    createorder
}