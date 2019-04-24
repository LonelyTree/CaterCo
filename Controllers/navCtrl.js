require('../db/db')

const menuGET = (req, res) => {
    res.render('../Views/Nav/editMenu.ejs')
}

const infoGET = (req, res) => {
    res.render('../Views/Nav/editInfo.ejs')
}

const ordersGET = (req, res) => {
    res.render('../Views/Nav/editOrders.ejs')
}


module.exports = {
    menuGET,
    infoGET,
    ordersGET,
    
}