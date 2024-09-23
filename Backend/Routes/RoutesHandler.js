const express = require('express');
const router = express.Router();

//routes modules
const   genericRoutes  = require( '../Container/httpMethods/GenericRoutes'); 


//defining routes
router.use( '/moduleOne', genericRoutes );



module.exports = router;
