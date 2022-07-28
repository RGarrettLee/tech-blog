const dashboard = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

dashboard.get('/', withAuth, async (req, res) => { // show all my posts | kick user to login screen if not logged in
    try {
        const userData = await User.findByPk(req.session.user_id, {include: [Post]});
        const user = userData.map((user) => user.get({ plain : true }));
        console.info(user);
        res.render('dashboard', { user, logged_in: req.session.logged_in });
    } catch (err) {
        res.json(err);
    }
});

module.exports = dashboard;