const Users = require('../models/Users');

module.exports = {

    renderLogin: (req, res) => {
        res.render('login');
    },

    authUser: async (req, res) => {

        if(await Users.authenticate(req.body.email, req.body.password)) {
            
            res.send('Usuário autenticado');
        } else {

            res.send('Erro ao autenticar');
        }

    }

}