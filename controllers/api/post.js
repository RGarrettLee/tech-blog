// create/update/delete blog posts
const router = require('express').Router();
const { User, Post } = require('../../models');

router.get('/', (req, res) => {
    res.send('page');
});

router.post('/new', async (req, res) => {
    const { title, content } = req.body;
    console.info('CREATING POST')
    try {
        console.info(title, content);
        const newPost = await Post.create({ title: title, content: content, user_id: req.session.user_id });
        res.status(201).json({ newPost })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;