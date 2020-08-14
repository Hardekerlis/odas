const yubico = {
  clientId: '56868',
  secret: 'LVHgqNZ5MucNM6rA8u300O1+Gew='
};


module.exports = (req, res, next) => {
  const token = req.cookies.token;
  const url = req.url.toLowerCase();

  if(url.startsWith('/op')) { // Op stands for operator
    // -- Add authentication for token here --
    console.log('This is operator call');
    next();

  }else next();
}
