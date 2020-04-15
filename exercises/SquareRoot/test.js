const squareRoot = require('./index');

describe('SquareRoot function', () => {
  test('should exists', () => {
    expect(squareRoot).toBeDefined();
    expect(typeof squareRoot).toEqual('function');
  });

  test('should calculate correct squareRoot value for [1, 4, 9]', () => {
    expect(squareRoot([1, 4, 9])).toEqual([1, 2, 3]);
  });

  test('should calculate correct squareRoot value for empty array', () => {
    expect(squareRoot([])).toEqual([]);
  });

  test('should calculate correct squareRoot value for [5, 9, 4, 100]', () => {
    expect(squareRoot([5, 9, 4, 100])).toEqual([Math.sqrt(5), 3, 2, 10]);
  });

});
