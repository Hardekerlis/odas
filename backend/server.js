const express = require('express');
const server = express();
const http = require('http').createServer(server);

require('./database/mongoose.js');

const cors = require('cors');
server.use(cors());

const bodyParser = require('body-parser');
server.use(bodyParser.json());
const cookieParser = require('cookie-parser');
server.use(cookieParser());

const auth = require('./middlewear/auth.js');
server.use(auth);

const app = require('./app/router.js');
server.use('/?', app);

http.listen(3000, () => {
  console.log(`listening on port *${3000}`);
});
