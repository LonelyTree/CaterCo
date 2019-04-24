require("../db/db")

// ARRIVAL PAGE
const arrive = (req, res) => {
    res.render("../Views/arrivalPage.ejs")
}


// LOGIN PAGE
const login = (req, res) => {
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
    arrive,
    login,
    logout
}
