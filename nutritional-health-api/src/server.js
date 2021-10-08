const mongoose = require('mongoose')

mongoose.connect( 'mongodb://mongo/healthcare' )
    .then(db => console.log("Database Nutritional Health Connected to",db.connection.host))
    .catch( err => console.error(err));