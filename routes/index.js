let express = require('express');
let router = express.Router();

router.use('/generate-changing-life-quote',require('./generate-changing-life-quote-controller'));


module.exports = router;