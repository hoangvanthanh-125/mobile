const express = require('express');
const router = express.Router();
const authController = require('./../controller/Authcontroller');
router.post('/register',authController.register);
router.post('/login',authController.login);

module.exports = router;