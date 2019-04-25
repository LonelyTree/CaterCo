require('../db/db')

const service = (req, res) => {
    res.render('../Views/Admin/editServices.ejs')
}

const users = (req, res) => {
    res.render('../Views/Admin/editUsers.ejs')
}

const admin = (req, res) => {
    res.render('../Views/Admin/adminMenu.ejs')
}

module.exports = {
    service,
    users,
    admin
}