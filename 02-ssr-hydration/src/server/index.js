const express = require('express');
import React from 'react';
import  ReactDOM from 'react-dom/server';
import App from '../app.jsx';
import {Provider} from 'react-redux';
import store from '../store/index.js';

import { StaticRouter } from 'react-router-dom/server';

const server = express();

// 为了让客户端能够访问到静态资源，需要将 build/client 目录设置为静态资源目录
server.use(express.static('build'));

server.get('/', (req, res) => {
  const app = ReactDOM.renderToString(
    <Provider store={store}>
       <StaticRouter location={req.url}>
          <App/>
       </StaticRouter>
    </Provider>
);
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="root">${app}</div>
  <script src="/client/client_bundle.js"></script>
</body>
</html>`);
});


server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
