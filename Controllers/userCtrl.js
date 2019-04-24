require('../db/db')

const mainGET = (req, res) => {
    res.render('../Views/User/mainPage.ejs')
}

const confirmGET = (req, res) => {
    res.render('../Views/User/confirmOrder.ejs')
}

const thankyouGET = (req, res) => {
    res.render('../Views/User/thankYou.ejs')
}


module.exports = {
    mainGET,
    confirmGET,
    thankyouGET
}