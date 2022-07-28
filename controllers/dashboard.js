const dashboard = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

dashboard.get('/', withAuth, async (req, res) => { // show all my posts | kick user to login screen if not logged in
    try {
        if (req.session.logged_in) {
            const userData = await User.findByPk(req.session.user_id, { include: [Post] });
            const user = userData.get({ plain: true });
            console.info(user);
            const posts = user.posts;
            //console.info(posts);
            res.render('dashboard', { posts, logged_in: req.session.logged_in });
        } else {
            res.redirect('/login');
        }
    } catch (err) {
        res.json(err);
    }
});

module.exports = dashboard;