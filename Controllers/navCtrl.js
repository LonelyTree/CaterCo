require('../db/db')

const menu = (req, res) => {
    res.render('../Views/Nav/editMenu.ejs')
}

const info = (req, res) => {
    res.render('../Views/Nav/editInfo.ejs')
}

const orders = (req, res) => {
    res.render('../Views/Nav/editOrders.ejs')
}


module.exports = {
    menu,
    info,
    orders,
    
}