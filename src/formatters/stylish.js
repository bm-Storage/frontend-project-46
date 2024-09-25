import _ from 'lodash';

const spacesCount = 4;
const shiftleft = 2;

const indent = (depth) => ' '.repeat(depth * spacesCount - shiftleft);

const stringify = (value, depth) => {
  if (!_.isObject(value)) {
    return `${value}`;
  }
  const keys = _.keys(value);
  const result = keys.map((key) => `${indent(depth + 1)}  ${key}: ${stringify(value[key], depth + 1)}`);
  return `{\n${result.join('\n')}\n  ${indent(depth)}}`;
};

const buildStylishLines = (diffData, depth) => diffData.map((el) => {
  const makeLine = (value, mark) => `${indent(depth)}${mark} ${el.key}: ${stringify(value, depth)}\n`;
  switch (el.type) {
    case 'added':
      return makeLine(el.value, '+');
    case 'deleted':
      return makeLine(el.value, '-');
    case 'unchanged':
      return makeLine(el.value, ' ');
    case 'changed':
      return `${makeLine(el.value1, '-')}${makeLine(el.value2, '+')}`;
    case 'node':
      return `${indent(depth)}  ${el.key}: {\n${buildStylishLines(el.children, depth + 1).join('')}${indent(depth)}  }\n`;
    default:
      throw new Error(`invalid type ${el.type}`);
  }
});

const getFormatStylish = (diffData) => `{\n${buildStylishLines(diffData, 1).join('')}}`;

export default getFormatStylish;
