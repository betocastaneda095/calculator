const calculator = require('./script.js');

describe('add', () => {
  test('adds 0 and 0', () => {
    expect(calculator.add(0, 0)).toBe(0);
  });

  test('adds 2 and 2', () => {
    expect(calculator.add(2, 2)).toBe(4);
  });
});
