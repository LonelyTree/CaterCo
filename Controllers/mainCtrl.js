require("../db/db")

// ARRIVAL PAGE
const arriveGET = (req, res) => {
    res.render("../Views/arrivalPage.ejs")
}


// LOGIN PAGE
const loginGET = (req, res) => {
    res.render("../Views/loginPage.ejs")
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
    arriveGET,
    loginGET,
    logou
}