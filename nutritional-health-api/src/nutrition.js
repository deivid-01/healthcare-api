const express = require('express')
const app = express();
require('./server');

app.use(require('./routes/nutrition.routes'))

app.listen(3000);
console.log('Nutrition Server on port', 3000);