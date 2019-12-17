const express = require('express');
const router = express.Router();

let get = require('../controller/generate-changing-life-quote/get');
// let delete = require('../controller/generate-changing-life-quote/delete');

router.get('/', get);

// router.delete('/', delete);

module.exports = router;