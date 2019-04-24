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
const logout=(req,res)=>{
    req.session.destroy((err)=>{
        if(err){
            res.send(err)
        }else{
            res.redirect('/caterco')
        }
    })
}

module.exports = {
    menuGET,
    infoGET,
    ordersGET,
    logout
}