const express = require('express');
const server = express();
const http = require('http').createServer(server);

const bodyParser = require('body-parser');
server.use(bodyParser.json());

const app = require('./app/router.js');
server.use('/?', app);

http.listen(3000, () => {
  console.log(`listening on port *${3000}`);
});
