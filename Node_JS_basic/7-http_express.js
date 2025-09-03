const express = require('express');
const fs = require('fs');

const app = express();
const dbPath = process.argv[2];

function buildStudentsReport(path) {
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
        resolve('Number of students: 0');
        return;
      }

      // CSV: firstname,lastname,age,field
      const students = rows
        .map((l) => l.split(','))
        .filter((cols) => cols.length >= 4);

      const total = students.length;
      const byField = {};
      for (const cols of students) {
        const firstName = cols[0].trim();
        const field = cols[3].trim();
        if (!byField[field]) byField[field] = [];
        byField[field].push(firstName); // ordre d’apparition
      }

      let out = `Number of students: ${total}`;
      Object.keys(byField)
        .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
        .forEach((field) => {
          out += `\nNumber of students in ${field}: ${byField[field].length}. List: ${byField[field].join(', ')}`;
        });

      resolve(out);
    });
  });
}

app.get('/', (req, res) => {
  res.type('text').send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const header = 'This is the list of our students';
  buildStudentsReport(dbPath)
    .then((report) => res.type('text').send(`${header}\n${report}`))
    .catch((err) => res.type('text').send(`${header}\n${err.message}`));
});

app.listen(1245);

module.exports = app;
