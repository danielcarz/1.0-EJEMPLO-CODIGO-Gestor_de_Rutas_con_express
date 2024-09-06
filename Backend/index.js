const express = require('express');

//IMPORTS
//Routes
const routesHandler = require('./Routes/RoutesHandler');

const app = express();
 
const PORT = 3000;




//ROUTES HANDLER
app.use( '/', routesHandler );

 
app.listen( PORT, () => {
    console.log("server run on port 3000");
} )
 