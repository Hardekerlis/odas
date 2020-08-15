const mongoose = require('mongoose');

const item = mongoose.model('items');

const getCat = async (req, res) => {
  const body = req.body;
  const cat = req.params.category;
  let amount = req.params.amount;

  if(amount > 20) amount = '20'; // Limit for amount of items able to be retrieved from database

  const items =  await item.find({ category: cat }).limit(amount);

  console.log(items);


}

module.exports = getCat;
