const express = require('express');


const config = require('./config/config.js');
// const setupExpress = require('./config/express');
// const setupMongoose = require('./config/mongoose');
// const routes = require('./routes');
const app = express();

require('./config/express')(app);
require('./config/mongoose')(app);



app.listen(config.PORT, ()=>
console.log(`Server is running on port ${config.PORT}...`));