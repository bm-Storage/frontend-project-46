import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import genDiff from '../index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
const readFile = (filename) => fs.readFileSync(getFixturePath(filename), 'utf-8');

const expectedStylish = readFile('expectedStylish.txt');
const expectedPlain = readFile('expectedPlain.txt');
const expectedJson = readFile('expectedJson.txt');
const formats = ['json', 'yaml'];

test.each(formats)('%s', (format) => {
  const filePath1 = getFixturePath(`filepath1.${format}`);
  const filePath2 = getFixturePath(`filepath2.${format}`);
  expect(genDiff(filePath1, filePath2)).toEqual(expectedStylish);
  expect(genDiff(filePath1, filePath2, 'stylish')).toEqual(expectedStylish);
  expect(genDiff(filePath1, filePath2, 'plain')).toEqual(expectedPlain);
  expect(genDiff(filePath1, filePath2, 'json')).toEqual(expectedJson);
});
