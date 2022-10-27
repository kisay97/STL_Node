const server = require('./server');
const database = require('./database');

server.start(database);