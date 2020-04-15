const sumN = require('./index');

describe('sumN function', () => {
  test('should exist', () => {
    expect(sumN).toBeDefined();
    expect(typeof sumN).toEqual('function');
  });

  test('should calculate correct sumN value for 1', () => {
    expect(sumN(1)).toEqual(1);
  });

  test('should calculate correct sumN value for 2', () => {
    expect(sumN(2)).toEqual(3);
  });

  test('should calculate correct sumN value for 5', () => {
    expect(sumN(5)).toEqual(15);
  });

  test('should calculate correct sumN value for 100', () => {
    expect(sumN(100)).toEqual(5050);
  });

  test('should calculate correct sumN value for 1000', () => {
    expect(sumN(1000)).toEqual(500500);
  });
});

