const express = require('express');
const router = express.Router();

//imports controllers
const { handleRequestByID, getTesting } = require('../Controllers/GenericControllers')


//HTTP METHODS

router.get('/', getTesting)


router.get('/:id', handleRequestByID );

module.exports = router;