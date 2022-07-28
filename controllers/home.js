const home = require('express').Router();
const { User, Post, Command } = require('../models');

home.get('/', async (req, res) => { // get all posts
    const postData = await Post.findAll({ include: [User] });
    const posts = postData.map((post) => post.get({ plain: true }));
    //console.info(posts);
    res.render('homepage', { posts, logged_in: req.session.logged_in });
});

module.exports = home;