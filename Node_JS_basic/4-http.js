const { createServer } = require('node:http');

const hostname = 'localhost';
const port = 1245;
const path ='/any_endpoint';

const app = createServer((req, res) => {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
});

app.listen(port, hostname, path);
