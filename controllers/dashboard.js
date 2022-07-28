const dashboard = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

dashboard.get('/', withAuth, async (req, res) => { // show all my posts | kick user to login screen if not logged in
    try {
        const postData = await Post.findAll({ include: [User]});
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', { posts, logged_in: req.session.logged_in });
    } catch (err) {
        res.json(err);
    }
});

module.exports = dashboard;