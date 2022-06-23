'use strict';

function Cart(array = []) {
  (this.goods = array), (this.totalPrice = 0), (this.count = 0);
}

Cart.prototype.calculateGoodsPrice = function (arr) {
  const sum = arr.reduce((acc, num) => acc + num);
  this.totalPrice = sum;
};

Cart.prototype.increaseCount = function (num) {
  this.count = num;
  console.log('countGoods: ', this.count);
};

Cart.prototype.addGoods = function (obj) {
  this.goods.push(obj);
};

Cart.prototype.getTotalPrice = function () {
  return this.totalPrice;
};

Cart.prototype.clear = function () {
  (this.goods = array), (this.totalPrice = 0), (this.count = 0);
};

Cart.prototype.print = function (items = this.goods) {
  let sum = [];
  let num = 0;
  items.forEach((item) => {
    num++;
    sum.push(item.price * item.goodCount);
    console.log('item: ', JSON.stringify(item));
  });

  this.increaseCount(num);
  this.calculateGoodsPrice(sum);
  console.log('TotalPrice: ', this.getTotalPrice());
};

const cart = new Cart();

function Goods(price = 0, title = '', goodCount = 0, discount = 0) {
  (this.price = price),
    (this.title = title),
    (this.goodCount = goodCount),
    (this.discount = discount);
}

const goods = new Goods();

function FoodGoods(price, title, goodCount = 0, discount, calories) {
  Goods.call(this, price, title, goodCount, discount);
  this.calories = calories;
}

const foodGoods = new FoodGoods(50, 'Bread', 500, 10, 250);
cart.addGoods(foodGoods);

function СlothingGoods(price, title, goodCount = 0, discount, material) {
  Goods.call(this, price, title, goodCount, discount);
  this.material = material;
}

const clothingGoods = new СlothingGoods(100, 'Dress', 23, 10, 'silk');
cart.addGoods(clothingGoods);

function TechnicsGoods(price, title, goodCount = 0, discount, type) {
  Goods.call(this, price, title, goodCount, discount);
  this.type = type;
}

const technicsGoods = new TechnicsGoods(1000, 'TV', 8, 15, 'electro');
cart.addGoods(technicsGoods);

cart.print();
