const { createServer } = require('node:http');
const fs = require('fs');

const port = '1245';
const dbFile = process.argv[2];

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!');
  }

  if (req.url === '/students') {
    res.writeHead(200, { 'Content-Type': 'text/plain'});
    res.write('This is the list of our students\n');

    fs.readFile(dbFile, 'utf8', (err, data) => {
      if (err) {
        return res.end('Cannot load database\n');
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);

      res.write(`Number of students: ${students.length}\n`);

      const byField = {};
      students.forEach((row) => {
        const cols = row.split(',').map((s) => s.trim());
        const firstName = cols[0];
        const field = cols[cols.length - 1];
        if (!byField[field]) byField[field] = [];
        byField[field].push(firstName);
      });

      Object.entries(byField).forEach(([field, list]) => {
        res.write(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`);
      });

      res.end();
    });
    return;
  }
});

app.listen(port);
module.exports = app;
