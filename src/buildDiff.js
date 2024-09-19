import _ from 'lodash';

const buildDiff = (data1, data2) => {
  const sortedUnionKeys = _.sortBy(_.union(_.keys(data1), _.keys(data2)));
  return sortedUnionKeys.map((key) => {
    if (!_.has(data1, key)) {
      return { type: 'added', key, value: data2[key] };
    }
    if (!_.has(data2, key)) {
      return { type: 'deleted', key, value: data1[key] };
    }
    if (_.isPlainObject(data1[key]) && _.isPlainObject(data2[key])) {
      return { type: 'node', key, children: buildDiff(data1[key], data2[key]) };
    }
    if (_.isEqual(data1[key], data2[key])) {
      return { type: 'unchanged', key, value: data1[key] };
    }
    return {
      type: 'changed', key, value1: data1[key], value2: data2[key],
    };
  });
};

export default buildDiff;
