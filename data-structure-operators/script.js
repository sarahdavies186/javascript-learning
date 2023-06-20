"use strict";

// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    time = "11.00",
    address,
    starterIndex,
    mainIndex,
  }) {
    console.log(
      `Order reccieved! Order will be delivered to ${address} at ${time}. Your order is ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}`
    );
  },
};

// add to objects
const newRestaurant = { ...restaurant, owner: { firstName: "Francesco" } };
console.log(newRestaurant);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = "Jonas";
const letters = [...str, " ", "S."];
console.log(letters);
console.log(...str);
// console.log(`${...str} Schmedtmann`); won't work

//copy array
const copyNewMeunu = [...restaurant.mainMenu];

//join 2 + arrays
const joinMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(joinMenu);

// the spread operator
const namesArr = ["sarah", "emma", "alice"];
console.log(...namesArr);

const newNamesArr = [...namesArr, "Amelia"];
console.log(...newNamesArr);

const newMenu = [...restaurant.mainMenu, "Lasagne"];
console.log(...newMenu);

//destructuring objects

restaurant.orderDelivery({
  // time: "10.30",
  address: "1 Vue",
  starterIndex: 0,
  mainIndex: 1,
});

const { name: restaurantName, location: restLocation, categories } = restaurant;
console.log(categories);

// Adding default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// Nested objects
const {
  fri: { open: o, close: c },
} = restaurant.openingHours;
console.log(o, c);

// desctructuring arrays

const arr = [1, 2, 3];

// const [a, b, c] = arr;
// console.log(a, b, c);

const [starter1, starter2, starter3] = restaurant.starterMenu;
console.log(starter1, starter2, starter3);

console.log(restaurant.order(3, 0));
