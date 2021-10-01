const mongoose = require('mongoose');
require('dotenv').config({path:'variables.env'});
const URI = process.env.DB_URL;

mongoose.connect( URI )
    .then(db => console.log("Database Connected"))
    .catch( err => console.error(err));

module.exports = mongoose ; 