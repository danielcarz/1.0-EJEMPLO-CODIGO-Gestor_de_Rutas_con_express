const express = require('express');
const router = express.Router();

//routes modules
const   ModuleOne_routesHandler  = require( '../Container/Routes/GenericRoutes'); 


//defining routes
router.use( '/moduleOne', ModuleOne_routesHandler );



module.exports = router;
