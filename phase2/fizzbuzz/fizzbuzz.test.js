const fizzbuzz = require('./fizzbuzz')

describe('fizzbuzz', () => {
  it('returns fizzbuzz when divisble by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
  })
  it('returns fizz when divisble by 3', () => {
    expect(fizzbuzz(6)).toBe('Fizz');
  })
  it('returns buzz when divisble by 5', () => {
    expect(fizzbuzz(10)).toBe('Buzz');
  })
  it('returns the number when not divisble by 3 or 5', () => {
    expect(fizzbuzz(7)).toBe(7);
  })
})

