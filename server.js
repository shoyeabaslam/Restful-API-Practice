
/*
step1: import http
step2: create a server and assign a port
step3: access the sever with the given port no.
*/

const http = require('http');
const app = require('./app.js')
const server = http.createServer(app);
const port = process.env.PORT || 3100;
server.listen(port)