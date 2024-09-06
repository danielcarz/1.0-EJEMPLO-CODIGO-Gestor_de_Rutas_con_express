const express = require('express');
const router = express.Router();

//routes modules
const    ModuleOne_routesHandler  = require( './1.0-RoutesModule_one/1.1-ModuleOne_RoutesHandler'); 

//defining routes
router.use( '/', ModuleOne_routesHandler );


module.exports = router;
