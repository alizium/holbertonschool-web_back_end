const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data
      .trim()
      .split('\n')
      .filter((line) => line.trim().length > 0);

    // Remove header
    const [header, ...rows] = lines;
    if (!header || rows.length === 0) {
      console.log('Number of students: 0');
      return;
    }

    // CSV expected: firstname,lastname,age,field
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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
