import path from 'path';
import fs from 'fs';
import process from 'process';

const getFullPath = (filename) => path.resolve(process.cwd(), '__fixtures__', filename);

const readFile = (fullpath) => fs.readFileSync(fullpath, 'utf-8');

const extractFormat = (filePath) => path.extname(filePath).slice(1);

export { getFullPath, readFile, extractFormat };

