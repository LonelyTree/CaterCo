require('../db/db')

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



module.exports = {
    main,
    confirm,
    thankyou,
    neworder
}