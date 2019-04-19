const path = require('path');
const http = require('http');
const appInstance = require(path.resolve(__dirname, 'src')+'/app.js');

// Launch http server
 http.createServer(appInstance);