const express = require('express');
const next = require('next');
const dev = process.env.NODE_ENV != 'production';
console.log(dev);
console.log(process.env.NODE_ENV);
const app = next({ dev });
const LRUCache = require('lru-cache');

const ssrCache = new LRUCache({
  length: function (n, key) {
    return n.toString().length + key.toString().length;
  },
  max: 100 * 1000 * 1000, // 100MB cache soft limit
  maxAge: 1000 * 10, // 10 seconds -- can be 1000 * 60 * 60 - for an hour
});

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
      if (req.url == '/' || req.url == '/sessions' || req.url == '/speakers') {
        console.log('Helloo');
        return ServerCache(req, res, req.url, {});
      }
      return handle(req, res);
    });
    server.listen(3300, (err) => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
  });

async function ServerCache(req, res, pagePath, queryPrams) {
  const key = req.url;
  console.log(key);
  if (ssrCache.has(key)) {
    res.setHeader('x-cache', 'HIT');
    res.send(ssrCache.get(key));
    //cacheHits++;
    return;
  }

  const html = await app.renderToHTML(req, res, pagePath, queryPrams);
  console.log(res.statusCode);
  if (res.statusCode != 200) {
    res.send(html);
    //cacheErrors++;
    return;
  }
  ssrCache.set(key, html);
  res.setHeader('x-cache', 'HIT');
  res.send(html);
}
