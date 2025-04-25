const express = require('express');
const userRoute = express.Router();
const UserController = require('../controllers/user.ctrl.js');
userRoute.post('/register', UserController.register); 
userRoute.post('/login', UserController.Login);

module.exports = userRoute