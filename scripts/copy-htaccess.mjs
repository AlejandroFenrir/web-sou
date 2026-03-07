import { copyFileSync, mkdirSync } from 'node:fs';
import { dirname, resolve } from 'node:path';

const source = resolve('deploy', '.htaccess');
const target = resolve('dist', '.htaccess');

mkdirSync(dirname(target), { recursive: true });
copyFileSync(source, target);

console.log('Copied deploy/.htaccess to dist/.htaccess');
