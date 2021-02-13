const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV != 'production';
console.log(dev);
console.log(process.env.NODE_ENV);
const app = next({ dev });

const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.get('/session/:sessionId', (req, res) => {
      const actualPage = '/session';
      console.log(req.params.sessionId);
      const queryParam = { sessionId: req.params.sessionId };
      app.render(req, res, actualPage, queryParam);
    });
    server.get('*', (req, res) => {
      return handle(req, res);
    });
    server.listen(3000, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });
