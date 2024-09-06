const express = require('express');
const router = express.Router();

//routes modules
const    ModuleOne_routesHandler  = require( './1.0-RoutesModule_one/1.1-ModuleOne_RoutesHandler'); 
const   ModuleTwo_routesHandler = require ('./2.0-RoutesModule_two/2.1-ModuleTwo_RoutesHandler');

//defining routes
router.use( '/', ModuleOne_routesHandler );
router.use( '/', ModuleTwo_routesHandler  )


module.exports = router;
