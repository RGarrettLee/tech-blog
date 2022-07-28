const router = require('express').Router();

const userRoute = require('./users');
const postRoute = require('./post');

router.use('/users', userRoute);
router.use('/post', postRoute);

module.exports = router;