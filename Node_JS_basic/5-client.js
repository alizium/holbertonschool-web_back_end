// 5-client.js
const http = require('http');

function get(path) {
  return new Promise((resolve) => {
    http.get({ host: 'localhost', port: 1245, path }, (res) => {
      let data = '';
      res.setEncoding('utf8');
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        console.log(data);
        resolve();
      });
    });
  });
}

(async () => {
  // Lance d’abord le serveur dans un autre terminal !
  await get('/');
  await get('/students');
})();
