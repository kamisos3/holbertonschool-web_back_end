const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        return reject(new Error('Cannot load the database'));
      }

      const lines = data
        .trim()
        .split('\n')
        .slice(1)
        .filter((line) => line);

      console.log(`Number of students: ${lines.length}`);

      const byField = {};
      lines.forEach(row => {
        const parts = row.split(',').map(s => s.trim());
        const firstName = parts[0];
        const field = parts[parts.length - 1];

        if (!byField[field]) {
          byField[field] = [];
        }
        byField[field].push(firstName);
      });

      for (const [field, students] of Object.entries(byField)) {
        console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
      }

      resolve();
    });
  });
}

module.exports = countStudents;
