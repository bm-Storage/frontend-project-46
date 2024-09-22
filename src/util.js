import path from 'path';
import fs from 'fs';
import process from 'process';

const getFullPath = (filepath) => path.resolve(process.cwd(), filepath);

const readFile = (fullpath) => fs.readFileSync(fullpath, 'utf-8');

const extractFormat = (filePath) => path.extname(filePath).slice(1);

export { getFullPath, readFile, extractFormat };
