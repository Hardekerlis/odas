const mongoose = require('mongoose');

const item = mongoose.model('items');

const newItem = async (req, res) => {
  const body = req.body;

  item.category = body.category;
  item.name = body.name;
  item.inStock = body.inStock;
  item.price = body.price;
  item.description = body.description;
  item.hidden = body.hidden;
  item.discount = body.discount;

  item.save();

};

module.exports = newItem;
