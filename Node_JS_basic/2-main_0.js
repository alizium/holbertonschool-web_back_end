// 2-main_0.js
const countStudents = require('./2-read_file');

try {
  countStudents('nope.csv');
} catch (err) {
  console.log(err);
}
