import yaml from 'js-yaml';

const parseFile = (data, format) => {
  const parsers = {
    json: JSON.parse,
    yaml: yaml.load,
    yml: yaml.load,
  };
  return parsers[format](data);
};

export default parseFile;
