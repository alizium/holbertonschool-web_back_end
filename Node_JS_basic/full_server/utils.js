import fs from 'fs';

export function readDatabase(path) {
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
        resolve({});
        return;
      }

      // Retourne { CS: [firstnames...], SWE: [firstnames...] }
      const byField = {};
      for (const row of rows) {
        const cols = row.split(',');
        if (cols.length >= 4) {
          const firstName = cols[0].trim();
          const field = cols[3].trim();
          if (!byField[field]) byField[field] = [];
          byField[field].push(firstName);
        }
      }

      resolve(byField);
    });
  });
}

export default readDatabase;
