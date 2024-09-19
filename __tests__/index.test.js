import { getFullPath, readFile } from '../src/util.js';
import genDiff from '../index.js';

const result = readFile(getFullPath('expectedStylish.txt'));
const formats = ['json', 'yaml'];

test.each(formats)('%s', (format) => {
  const filePath1 = `filepath1.${format}`;
  const filePath2 = `filepath2.${format}`;
  const actual = genDiff(filePath1, filePath2);
  expect(actual).toEqual(result);
});
