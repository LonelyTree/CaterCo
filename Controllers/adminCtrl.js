require('../db/db')

const serviceGET = (req, res) => {
    res.render('../Views/Admin/editServices.ejs')
}

const usersGET = (req, res) => {
    res.render('../Views/Admin/editUsers.ejs')
}

const adminGET = (req, res) => {
    res.render('../Views/Admin/adminMenu.ejs')
}

module.exports = {
    serviceGET,
    usersGET,
    adminGET
}