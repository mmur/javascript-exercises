const maxOfThree = require('./index');

describe('maxOfThree function', () => {
  test('should exist', () => {
    expect(maxOfThree).toBeDefined();
    expect(typeof maxOfThree).toEqual('function');
  });

  test('should calculate correct maxOfThree value for (1, 2, 3)', () => {
    expect(maxOfThree(1, 2, 3)).toEqual(3);
  });

  test('should calculate correct maxOfThree value for (-9, -19, -10)', () => {
    expect(maxOfThree(-9, -19, -10)).toEqual(-9);
  });

  test('should calculate correct maxOfThree value for (149, -149, 5)', () => {
    expect(maxOfThree(149, -149, 5)).toEqual(149);
  });

  test('should calculate correct maxOfThree value for (15, 9, 15)', () => {
    expect(maxOfThree(15, 9, 15)).toEqual(15);
  });
});

