const express = require('express');
const router = express.Router();


//route testing
router.get('/url_request_one', (req, res) => {
 
    res.send('hello equest one')
});

module.exports = router;