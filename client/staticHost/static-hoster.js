const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

if (process.env.NODE_ENV === 'production') {
  const path = require('path');
  app.use(express.static(path.resolve('../build')));
  app.get('*', (req, res) => {
    res.sendFile('../build/index.html', {
      root: path.resolve(__dirname, '..')
    });
  });
}

app.listen(PORT, HOST);
