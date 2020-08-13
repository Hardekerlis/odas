const yubico = {
  clientId: '56868',
  secret: 'LVHgqNZ5MucNM6rA8u300O1+Gew='
};


module.exports = (req, res, next) => {
  const token = req.cookies.token;
  const url = req.url;

  if(url.startsWith('/op')) {
    // -- Add authentication for token here --

    if(true) next();


  }else next();
}
