const { createServer } = require('node:http');

const localhost = 1245;

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else {
    res.end('Hello Holberton School!');
  }
});

app.listen(localhost);

module.exports = app;
