const express = require('express');

//IMPORTS

require('dotenv').config(); //DOTENV 

const routesHandler = require('./Routes/RoutesHandler'); //ROUTES

const app = express();

//SETTING PORT
const PORT = process.env.PORT || 3000;

 
 

//ROUTES HANDLER
app.use( '/', routesHandler );
 
  
app.listen( PORT, () => {
    console.log(`Server running on port ${PORT}`);
} )
 