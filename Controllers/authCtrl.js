const express = require('express');
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.get('/login', (req, res) => {
    res.render('loginPage.ejs', {
        message: req.session.message
    })
});

router.post("/register", async(req, res) => {
    const password = req.body.password;
    const passwordHash = bcrypt.hashSync(password,
        bcrypt.genSaltSync(10));

    const userDbEntry = {};
    userDbEntry.username = req.body.username;
    userDbEntry.password = passwordHash;
    userDbEntry.email = req.body.email;
    userDbEntry.payment = req.body.payment;

    try {
        const createdUser = await User.create(userDbEntry);

        req.session.logged = true;
        req.session.usersDbId = createdUser._id;

        res.redirect("/caterco/main");

    } catch (err) {
        res.send(err);
    }

});

router.post("/login", async(req, res) => {

    try {
        const foundUser = await User.findOne({
            "username": req.body.username
        });

        if (foundUser) {

            if (bcrypt.compareSync(req.body.password,
                    foundUser.password) === true) {
                req.session.logged = true;
                req.session.usersDbId = foundUser._id;
                console.log(req.session, " login successful");
                res.redirect("/caterco/main");
            } else {
                req.session.message = "Username or password is incorrect";
                res.redirect("/caterco/login");
            }

        } else {
            req.session.message = "You don't exist!! Create an account to solve this existential conundrum!";
            res.redirect("/caterco/login");
        }


    } catch (err) {
        res.send(err);
    }

});


module.exports = router;