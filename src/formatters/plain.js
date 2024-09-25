import _ from 'lodash';

const stringify = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }
  if (_.isString(value)) {
    return `'${value}'`;
  }
  return value;
};

const buildPlaneLines = (diffData, currentPath = '') => diffData.reduce((acc, el) => {
  const path = `${currentPath}${el.key}`;
  if (el.type === 'unchanged') {
    return acc;
  }
  if (el.type === 'deleted') {
    const result = `Property '${path}' was removed`;
    return [...acc, result];
  }
  if (el.type === 'changed') {
    const value1 = stringify(el.value1);
    const value2 = stringify(el.value2);
    const result = `Property '${path}' was updated. From ${value1} to ${value2}`;
    return [...acc, result];
  }
  if (el.type === 'added') {
    const value = stringify(el.value);
    const result = `Property '${path}' was ${el.type} with value: ${value}`;
    return [...acc, result];
  }
  const result = buildPlaneLines(el.children, `${path}.`);
  return [...acc, ...result];
}, []);

const getFormatPlain = (diffData) => buildPlaneLines(diffData).join('\n');

export default getFormatPlain;
