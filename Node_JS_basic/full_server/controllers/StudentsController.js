import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const dbPath = process.argv[2]; // récupérer au moment de l'exécution
    readDatabase(dbPath)
      .then((byField) => {
        const lines = ['This is the list of our students'];
        Object.keys(byField)
          .sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()))
          .forEach((field) => {
            lines.push(
              `Number of students in ${field}: ${byField[field].length}. List: ${byField[field].join(', ')}`
            );
          });
        res.status(200).type('text').send(lines.join('\n'));
      })
      .catch(() => {
        res.status(500).type('text').send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;
    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).type('text').send('Major parameter must be CS or SWE');
      return;
    }

    const dbPath = process.argv[2];
    readDatabase(dbPath)
      .then((byField) => {
        const list = byField[major] || [];
        res.status(200).type('text').send(`List: ${list.join(', ')}`);
      })
      .catch(() => {
        res.status(500).type('text').send('Cannot load the database');
      });
  }
}

export default StudentsController;
