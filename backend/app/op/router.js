const express = require('express');
const router = express.Router();

const newItem = require('./newItem.js');
router.post('/items/new', newItem);

module.exports = router;
