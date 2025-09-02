const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line.trim().length > 0);

      const [header, ...rows] = lines;
      if (!header || rows.length === 0) {
        console.log('Number of students: 0');
        resolve();
        return;
      }

      const students = rows
        .map((l) => l.split(','))
        .filter((cols) => cols.length >= 4);

      const total = students.length;
      console.log(`Number of students: ${total}`);

      const byField = {};
      students.forEach((cols) => {
        const firstName = cols[0].trim();
        const field = cols[3].trim();
        if (!byField[field]) byField[field] = [];
        byField[field].push(firstName);
      });

      Object.keys(byField)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          const list = byField[field].join(', ');
          console.log(`Number of students in ${field}: ${byField[field].length}. List: ${list}`);
        });

      resolve();
    });
  });
}

module.exports = countStudents;
