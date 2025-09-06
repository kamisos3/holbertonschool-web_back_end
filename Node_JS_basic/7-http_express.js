const express = require('express');
const fs = require('fs');

const app = express();
const port = 1245;
const dbFile = process.argv[2];

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database\n'));
        return;
      }
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1);
      const byField = {};
      students.forEach((row) => {
        const cols = row.split(',').map((s) => s.trim());
        const firstName = cols[0];
        const field = cols[cols.length - 1];
        if (!byField[field]) byField[field] = [];
        byField[field].push(firstName);
      });
      resolve({
        total: students.length,
        byField,
      });
    });
  });
}

app.get('/', (req, res) => {
  res.type('text/plain');
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  res.type('text/plain');
  try {
    const stats = await countStudents(dbFile);
    res.write('This is the list of our students\n');
    res.write(`Number of students: ${stats.total}\n`);
    Object.entries(stats.byField).forEach(([field, list]) => {
      res.write(`Number of students in ${field}: ${list.length}. List: ${list.join(', ')}\n`);
    });
    res.end();
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(port);

module.exports = app;
