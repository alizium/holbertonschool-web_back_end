process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

let nameBuffer = '';

process.stdin.on('data', (chunk) => {
  nameBuffer += chunk;
  const lines = nameBuffer.split('\n');
  // When a full line is entered, print the response
  if (lines.length > 1) {
    const name = lines[0].trim();
    if (name.length > 0) {
      process.stdout.write(`Your name is: ${name}\n`);
    } else {
      process.stdout.write('Your name is: \n');
    }
    process.stdin.end(); // close to trigger 'end'
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
