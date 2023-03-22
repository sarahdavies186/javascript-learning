const multiply = require('./multiply');

describe('multiply', () => {
  it('multiplies 3 and 2', () => {
    expect(multiply(3, 2)).toBe(6);
  })
  it('multplies 10 and 5', () => {
    expect(multiply(10, 5)).toBe(50);
  })
});

