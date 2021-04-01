const mongoose = require('mongoose');
const config = require('./config')


function setupMongoose (){

    mongoose.connect('mongodb://localhost:27017/shell;', {useNewUrlParser: true, useUnifiedTopology: true});

    const db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', console.log.bind(console, 'Db Connected!'));

        mongoose.set('useNewUrlParser', true);
        mongoose.set('useFindAndModify', false);
        mongoose.set('useCreateIndex', true);
}


module.exports = setupMongoose;
