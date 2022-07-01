const Users = require('../models/Users');

module.exports = {

    renderSignup: (req, res) => {
        res.status(200).render('signup');
    },

    createUser: async (req, res) => {

        const {fistName, lastName, email, password, agreement} = req.body;

        if(
            fistName &&
            lastName && 
            email && 
            password && 
            agreement == 'on'
        ) {

            if(await Users.signUser(fistName, lastName, email, password)) {
                res.status(201).send('User registered successfully!')
            } else {
                res.status(500).send('Error to register the user!')
            }

        } else {
            res.status(400).redirect('/app/signup?erro=true')
        }

    }

}