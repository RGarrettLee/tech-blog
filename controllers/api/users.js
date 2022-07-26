// create/update/delete blog posts
const router = require('express').Router();
const { User, Post } = require('../../models');

router.post('/login', (req, res) => {
    User.findOne({
        where: {
          username: req.body.username
        }
      }).then(dbUserData => {
        if (!dbUserData) {
          res.status(400).json({ message: 'No user account found!' });
          return;
        }
    
        const validPassword = dbUserData.checkPassword(req.body.password);
    
        if (!validPassword) {
          res.status(400).json({ message: 'Incorrect password!' });
          return;
        }
    
        req.session.save(() => {
          req.session.user_id = dbUserData.id;
          req.session.username = dbUserData.username;
          req.session.logged_in = true;
    
          res.json({ user: dbUserData, message: 'You are now logged in!' });
        });
      });
});

router.post('/logout', (req, res) => {
    if(req.session.logged_in){
        req.session.destroy(() => {
            res.status(204).end()
        });
    } else {
        res.status(404).end();
    }
});

router.post('/signup', async (req, res) => {
    try {
        const userDataDb = await User.create({
            username: req.body.username,
            password: req.body.password
        });


        req.session.save(() => {
            req.session.logged_in = true,
            req.session.user_id = userDataDb.id,
            req.session.username = userDataDb.username,
            res.status(200).json(userDataDb)
        })
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;