"use strict";

function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}

const country1 = describeCountry("finland", 6, "helsinki");
console.log(country1);

const country2 = describeCountry("england", 68, "London");
console.log(country2);

// function declaration

function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}

const china = percentageOfWorld1(1441);
console.log(china);

// function expression

const percentageOfWorld2 = function (population) {
  return (population / 7900) * 100;
};

const england = percentageOfWorld2(68);
console.log(england);

// arrow function

const percentageOfWorld3 = (population) => {
  return (population / 7900) * 100;
};

const italy = percentageOfWorld3(40);
console.log(italy);

// function within a function

const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
};

console.log(describePopulation("china", 1441));

const calcAverage = (a, b, c) => (a + b + c) / 3;

let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    console.log(`Dolphins win (${avgDolphins} v ${avgKoalas})`);
  } else if (avgKoalas >= avgDolphins * 2) {
    console.log(`Koalas win (${avgKoalas} v ${avgDolphins})`);
  } else {
    console.log("No team wins");
  }
};

checkWinner(scoreDolphins, scoreKoalas);

//arrays

const populations = [10, 20, 30, 40];
console.log(populations.length === 4);
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

const neighbours = ["Portugal", "France", "Andorra"];
neighbours.push("Utopia"); // add to the end of array, unshift for beginning
console.log(neighbours);
neighbours.pop(); // remove from the end, shift for beginning
console.log(neighbours);

if (!neighbours.includes("Germany")) {
  console.log("Probably not a central European country :D");
}

neighbours[0] = "portugal";
console.log(neighbours);

// Steven wants you to improve his tip calculator, using the same rules as before — tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%.

// Your tasks:

// Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100.

// And now let's use arrays! So, create an array called bills containing the test data below.

// Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// BONUS: Create an array total containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44.

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(totals);

//objects

const myCountry = {
  country: "england",
  capital: "london",
  language: "english",
  population: 68,
};

console.log(myCountry);

console.log(
  `${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, and a capital called ${myCountry.capital}`
);

myCountry.population += 2;
console.log(myCountry);

myCountry["population"] -= 2;
console.log(myCountry);
