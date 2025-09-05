const { createServer } = require('node:http');

const hostname = 'localhost';
const port = 1245;

const server = createServer((app, res) => {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
});

server.listen(port, hostname);