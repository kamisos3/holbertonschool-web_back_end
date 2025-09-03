const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.trim().split('\n');
  const records = lines.slice(1);
  const totalStudents = records.length;
  console.log(`Number of students: ${totalStudents}`);

  const byField = {};
  for (const line of records) {
    const parts = line.split(',');
    const firstName = parts[0];
    const field = parts[parts.length - 1];

    if (!byField[field]) byField[field] = [];
    byField[field].push(firstName);
  }

  for (const [field, students] of Object.entries(byField)) {
    console.log(
      `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`
    );
  }
}

module.exports = countStudents;
