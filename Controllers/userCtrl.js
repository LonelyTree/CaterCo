require('../db/db')
const Food = require('../models/food')
const User = require('../models/user')
const main = (req, res) => {
    res.render('../Views/User/mainPage.ejs')
}

const confirm = (req, res) => {
    res.render('../Views/User/confirmOrder.ejs')
}

const thankyou = (req, res) => {
    res.render('../Views/User/thankYou.ejs')
}


const neworder = (req,res)=>{
    res.render('../Views/User/newOrder.ejs')
}



const newFood = async(req, res) => {
    try {
        const food = Food.findById(req.body._id)
        const user = User.find(req.sessions.username)
        user.orders[inputfromCalendar].items.push(food._id)


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