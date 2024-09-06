const express = require('express');
const router = express.Router();

const getTesting = ( req, res ) =>{

    res.send( `get testing` );

}

const handleRequestByID = ( req, res ) =>{

    const id = req.params.id;
    
    res.send( `ID recibido ${id}` );

}

module.exports = {

    handleRequestByID,
    
    getTesting
}