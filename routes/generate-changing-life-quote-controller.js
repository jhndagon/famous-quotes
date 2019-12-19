const express = require('express');
const router = express.Router();

let get = require('../controller/generate-changing-life-quote/get');
let get_by_id = require('../controller/generate-changing-life-quote/get_by_id');
let delete1 = require('../controller/generate-changing-life-quote/delete');

router.get('/', get);
router.get('/:id', get_by_id);
router.delete('/:id', delete1);

module.exports = router;