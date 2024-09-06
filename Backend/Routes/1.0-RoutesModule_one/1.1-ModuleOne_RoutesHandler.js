const express = require('express');
const router = express.Router();


//route testing
router.get('/one_url_get_request', (req, res) => {
 
    res.send('hello module ONE: GET REQUETS');
});

router.post('/one_url_post_request', ( req, res ) => {

        res.send(' hello MODULE ONE: POST REQUEST ');
});

module.exports = router;