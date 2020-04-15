const sortNumberArray = require('./index');

describe('sortNumberArray function', () => {
  test('should exist', () => {
    expect(sortNumberArray).toBeDefined();
    expect(typeof sortNumberArray).toEqual('function');
  });

  test('should calculate correct sortNumberArray value for [9, -1, 4, 0]', () => {
    expect(sortNumberArray([9, -1, 4, 0])).toEqual([-1, 0, 4, 9]);
  });

  test('should calculate correct sortNumberArray value for empty array', () => {
    expect(sortNumberArray([])).toEqual([]);
  });

  test('should calculate correct sortNumberArray value for [4]', () => {
    expect(sortNumberArray([4])).toEqual([4]);
  });
});
