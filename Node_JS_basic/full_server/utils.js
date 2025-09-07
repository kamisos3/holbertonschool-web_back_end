import { promises as fs } from 'fs';

const readDatabase = (path) => {
  Promise((resolve, reject) => {
    fs.readFile(path, 'utf8')
      .then((data) => {
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
        resolve(byField);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
};

export default readDatabase;
