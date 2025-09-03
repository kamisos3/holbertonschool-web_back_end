console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');

let buffer = '';

process.stdin.on('data', (chunk) => {
  buffer += chunk;
});

process.stdin.on('end', () => {
  const name = buffer.trim();

  console.log(`Your name is: ${name.trim()}`);
  console.log('This important software is now closing');
  process.exit(0);
});
