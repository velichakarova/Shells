const express = require('express');
const cors = require('cors');

function setupExpress(app){

    app.use(express.static(`static`));
    app.use(express.json());
}

module.exports= setupExpress;