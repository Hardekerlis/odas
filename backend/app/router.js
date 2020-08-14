const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).send();
});

const categories = require('./categories/router.js');
router.use('/items/?', categories);

module.exports = router;
