const post = require('express').Router();
const { User, Post, Comment } = require('../models');
//const withAuth = require('../utils/auth');

post.get('/', async (req, res) => {
    res.send('Post Page');
});

post.get('/:slug', async (req, res) => {
    res.send('Specific Post');
});

module.exports = post;