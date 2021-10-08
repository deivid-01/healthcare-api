
const express= require('express');
const morgan = require('morgan'); 
const cors = require('cors');
require('./database'); 

require('dotenv').config({path:'variables.env'});


const app = express();
app.set('port',process.env.PORT || 5000);




app.use(morgan('dev'));
app.use(express.json());
app.use(cors())

//#region Routes
app.use('/api/users',require('./routes/user.routes'));
//#endregion


app.listen(app.get('port'),app.get('host'),()=>{
    console.log('Server on port',app.get('port'));
});
