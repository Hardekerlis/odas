const express = require('express');
const router = express.Router();

const getCat = require('./getCat');
router.post('/:category/:amount',getCat );

module.exports = router;
