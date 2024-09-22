import getFormatStylish from './stylish.js';
import getFormatPlain from './plain.js';

const getFormat = (data, format) => {
  switch (format) {
    case 'stylish':
      return getFormatStylish(data);
    case 'plain':
      return getFormatPlain(data);
    case 'json':
      return JSON.stringify(data, null, 2);
    default:
      throw new Error(`Invalid format: ${format}. Valid formats are: 'stylish', 'plain'`);
  }
};

export default getFormat;
