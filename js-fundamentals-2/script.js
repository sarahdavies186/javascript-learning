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
