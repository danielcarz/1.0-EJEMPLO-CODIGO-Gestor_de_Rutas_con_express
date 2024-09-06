const express = require('express');
const router = express.Router();


//route testing
router.get('/two_url_get_request', (req, res) => {
 
    res.send('hello module TWO: GET REQUETS');
});

router.post('/two_url_post_request', ( req, res ) => {

        res.send(' hello MODULE TWO: POST REQUEST ');
});

module.exports = router;