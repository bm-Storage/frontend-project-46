import parseFile from './parser.js';
import { getFullPath, readFile, extractFormat } from './util.js';
import buildDiff from './buildDiff.js';
import format from './formatters/stylish.js';

const gendiff = (filepath1, filepath2) => {
  const fullPath1 = getFullPath(filepath1);
  const fullPath2 = getFullPath(filepath2);

  const data1 = parseFile(readFile(fullPath1), extractFormat(filepath1));
  const data2 = parseFile(readFile(fullPath2), extractFormat(fullPath2));
  const diff = buildDiff(data1, data2);
  return format(diff);
};

export default gendiff;
