//Loading modules
    const express = require('express');
    const expressLayouts = require('express-ejs-layouts');
    const bodyParser = require('body-parser');
    const router = require('./routes/routes');
    const path = require('path');

    const app = express();

//Settings
    //Body-parser
        app.use(bodyParser.urlencoded({extended: true}));
        app.use(bodyParser.json());

    //Ejs
        app.set('layout', './layouts/main');
        app.set('view engine', 'ejs');
        app.use(expressLayouts);

    //Public
        app.use(express.static(path.join(__dirname, 'public')));

//Routes
    app.use('/app', router)

//Others


//Init Server
    const PORT = 8081;
    app.listen(PORT, () => {
        console.log(`The server's runing in the port: ${PORT}`);
    });