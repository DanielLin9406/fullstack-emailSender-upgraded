require('dotenv').config();
const proxy = require('http-proxy-middleware');
const express = require('express');
const http = require('http');

const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

function noCache(req, res, next) {
  res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
  res.header('Expires', '-1');
  res.header('Pragma', 'no-cache');
  next();
}

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.resolve('../client/build')));
  // The following will cause proxy totally failed:
  // app.get('*', noCache, (req, res) => {})
  app.get('/', noCache, (req, res) => {
    res.sendFile(path.resolve('build/index.html'));
  });
  app.get('/surveys/*', noCache, (req, res) => {
    res.sendFile(path.resolve('build/index.html'));
  });
}

if (process.env.NODE_ENV === 'production' && process.env.DOCKER === 'false') {
  const apiProxy = proxy('/api/*', {
    target: `http://${process.env.API_HOST}:${process.env.API_PORT}/v1`
  });
  const authProxy = proxy('/auth/google', {
    target: `http://${process.env.API_HOST}:${process.env.API_PORT}`
  });

  const wsProxy = proxy('/socket.io', {
    target: 'http://localhost:5001',
    ws: true,
    changeOrigin: true
  });
  app.use(apiProxy);
  app.use(authProxy);
  app.use(wsProxy);
  const server = http.createServer(app).listen(PORT, HOST);
  server.on('upgrade', wsProxy.upgrade);
} else {
  http.createServer(app).listen(PORT, HOST);
}
