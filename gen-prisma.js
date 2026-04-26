const { spawn } = require('child_process');
const path = require('path');

const cwd = __dirname;
console.log('Running prisma generate in:', cwd);

const proc = spawn('npx', ['prisma', 'generate'], {
  cwd,
  stdio: 'inherit',
  shell: true,
  env: { ...process.env }
});

proc.on('close', (code) => {
  console.log('prisma generate exited with code', code);
  process.exit(code);
});
