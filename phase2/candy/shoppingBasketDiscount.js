class ShoppingBasketDiscount {
  constructor() {
    this.discount = 0;
    this.candies = [];
  }

  addItem(candy) {
    this.candies.push(candy);
  }

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.candies.map(candy => {
      totalPrice += candy.getPrice();
  });

    return totalPrice - this.discount;
  }
}

module.exports = ShoppingBasketDiscount;

