const { createServer } = require('node:http');

const hostname = 'localhost';
const port = 1245;
const path ='/any_endpoint';

const app = createServer((req, res) => {
    if (req.url === '/') {
      res.statusCode = 200;
      res.end('Hello Holberton School!');
    } else {
      res.writeHead(404);
      res.end();
    }
});

app.listen(port, hostname, path);

module.exports = app;