const express = require('express');
const cors = require('cors');
const routes = require('../routes');
const cookieParser =require('cookie-parser');
const { auth } = require('../middleweres/auth');

function setupExpress(app){
    app.use(express.json());
    app.use(cors());
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(auth);
    app.use(cookieParser());
    app.use('/api', routes);
}

module.exports= setupExpress;