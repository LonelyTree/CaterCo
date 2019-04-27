const User = require("../models/user");
const bcrypt = require("bcryptjs");
const Cryptr = require('cryptr')
const cryptr = new Cryptr(`Shhhhh, don't tell!`)





//CREATES NEW USER
const createUser = async(req, res) => {

    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));

    try {
        const alive = await User.findOne({ username: req.body.username })
        if (alive) {
            req.session.message = "Sorry! Username already taken!"
            res.redirect('/caterco/login')
        } else {
            if (req.body.admin === 'on') {
                req.body.admin = true;
                req.session.admin = true;
                res.redirect("/caterco/admin")
            } else {
                req.body.admin = false
            }
            // ENCRYPT CODE
            req.body.email = cryptr.encrypt(req.body.email)
            req.body.payment = cryptr.encrypt(req.body.payment)
                // ENCRYPT CODE
            const createdUser = await User.create(req.body);

            req.session.logged = true;
            req.session.usersDbId = createdUser._id;
            res.redirect("/caterco/main");
        }


    } catch (err) {
        res.send(err);
    }

};



// VALIDATES EXISTING USER CREDENTIALS
const validate = async(req, res) => {

    try {
        const foundUser = await User.findOne({
            "username": req.body.username
        });

        if (foundUser) {

            if (foundUser.admin === true) {
                bcrypt.compareSync(req.body.password,
                    foundUser.password)
                req.session.logged = true;
                req.session.usersDbId = foundUser._id;
                res.redirect("/caterco/admin")
            } else {

                if (bcrypt.compareSync(req.body.password,
                        foundUser.password)) {
                    req.session.logged = true;
                    foundUser.admin = false;
                    req.session.usersDbId = foundUser._id;
                    res.redirect("/caterco/main");


                } else {
                    req.session.message = "Username or password is incorrect";
                    res.redirect("/caterco/login");
                }
            }

        } else {
            req.session.message = "You don't exist!! Create an account to solve this existential conundrum!";
            res.redirect("/caterco/login");
        }



    } catch (err) {
        res.send(err);
    }

};


module.exports = {
    validate,
    createUser,
    cryptr
};