const express = require('express');
import React from 'react';
import  ReactDOM from 'react-dom/server';
import App from '../app.jsx';

const server = express();

server.get('/', (req, res) => {
  const app = ReactDOM.renderToString(<App />);
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root"></div>
  ${app}
</body>
</html>`);
});


server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
