const express = require('express');
const UserController = require('../Controllers/user.controller');



const router = express.Router();

router.route('/').post(UserController.createUser )
                 .get(UserController.Login )

module.exports = router; 