const mongoose = require('mongoose');

const login = async (req, res) => {
  const body = req.body;

  console.log(123);

  res.json({
    lol: 123
  }).send()
}

module.exports = login;
