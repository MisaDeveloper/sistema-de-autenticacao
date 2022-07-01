//Loading modules
    const express = require('express');
    const router = express.Router();

    //Controller modules
        const LoginController = require('../controllers/LoginController');
        const SignupController = require('../controllers/SignupController');

//Define routes
    router.get('/login', LoginController.renderLogin);
    router.get('/signup', SignupController.renderSignup);
    router.post('/authUser', LoginController.authUser);
    router.post('/signUser', SignupController.createUser);

//Export modules
    module.exports = router;