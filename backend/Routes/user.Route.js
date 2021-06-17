const express = require('express');
const UserController = require('../Controllers/user.controller');



const router = express.Router();

router.route('/SignUp').post(UserController.createUser )
router.route('/SignIn').post(UserController.Login )

module.exports = router; 