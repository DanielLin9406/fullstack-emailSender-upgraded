const path = require('path');
const http = require('http');
const app = require(path.resolve(__dirname, 'src', 'app'));

// Launch http server
 http.createServer(app);