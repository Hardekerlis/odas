const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.status(200).send();
});

const adminLogin = require('./auth/adminLogin.js');
router.post('/adminLogin', adminLogin)

const categories = require('./categories/router.js');
router.use('/items/?', categories);

const op = require('./op/router.js');
router.use('/op/?', op);

module.exports = router;
