const express = require('express');

//IMPORTS

require('dotenv').config(); //DOTENV
const morgan = require('morgan'); //MORGAN 

const routesHandler = require('./Routes/genericsRoutes'); //ROUTES

const app = express();

//SETTING PORT
const PORT = process.env.PORT || 3000;

//MORGAN
app.use(morgan( 'combined' ));

 
 

//ROUTES HANDLER
app.use( '/', routesHandler );
 
  
app.listen( PORT, () => {
    console.log(`Server running on port ${PORT}`);
} )
 