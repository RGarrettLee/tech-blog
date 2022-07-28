const router = require('express').Router();

const homeRoutes = require('./home');
const apiRoutes = require('./api');
const dashboardRoutes = require('./dashboard');
const postRoutes = require('./post');
const loginRoutes = require('./login');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/post', postRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);

module.exports = router;