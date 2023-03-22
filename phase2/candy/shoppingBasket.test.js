const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket class', () => {
  it('shows the correct total price', () => {
  const candyDouble = {
    getName: () => 'Skittle',
    getPrice: () => 3.99
  }
  candyDouble.getName();
  candyDouble.getPrice();

  const basket = new ShoppingBasket();
  basket.addItem(candyDouble)
  basket.addItem(candyDouble)
  expect(basket.getTotalPrice()).toBe(7.98);
  })
});