const User = require("../models/User");

index: (req, res) => {
    User.find({}, (err, allUsers) => {
        res.render("arrivalPage.ejs", {
            user: allUsers
        })
    })
}