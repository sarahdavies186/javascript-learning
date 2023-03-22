class ShoppingBasket {
  constructor() {
    this.items = [];
  }

  addItem(candy) {
    this.items.push(candy);
  }

  getTotalPrice() {
    let sum = 0;
    this.items.map(candy => {
      sum += candy.getPrice();
    });
    return sum;
  }

}

module.exports = ShoppingBasket;