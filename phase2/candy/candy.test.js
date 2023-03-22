const Candy = require('./candy')

describe('Candy class', () => {
  const candy = new Candy('Mars', 4.99);
  
  it('returns the name of the candy', () => {
    expect(candy.getName()).toEqual('Mars');
  })

  it('returns the price of the candy', () => {
    expect(candy.getPrice()).toEqual(4.99);
  })
})