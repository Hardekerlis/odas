const getCat = (req, res) => {
  const body = req.body;
  const cat = req.params.category;
  let amount = req.params.amount;

  if(amount > 20) amount = '20'; // Limit for amount of items able to be retrieved from database

}

module.exports = getCat;
