const login = require('express').Router();
const { User, Post } = require('../models');

login.get('/', (req, res) => { // get all posts
    res.render('login', { logged_in: req.session.logged_in });
});

module.exports = login;