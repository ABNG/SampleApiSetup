const express = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const webRoute= require('./web.route');

const router = express.Router();

router.use('/auth', authRoute);
router.use('/users', userRoute);
router.use('/web', webRoute);

module.exports = router;
