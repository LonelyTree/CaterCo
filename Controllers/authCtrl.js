const express = require('express');
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.get('/login', (req, res) => {
    res.render('loginPage.ejs', {
      message: req.session.message
    })
  });