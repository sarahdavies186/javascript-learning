const country = "England";
const continent = "Europe";
let population = 68;

console.log(country);
console.log(continent);
console.log(population);

const isIsland = true;
const language = "English";

console.log(typeof true);
console.log(typeof language);

population++;
console.log(population);

const finlandPopulation = 6;
const averagePopulation = 33;

console.log(population > finlandPopulation);
console.log(population > averagePopulation);

console.log(
  country +
    " is in " +
    continent +
    " and its " +
    population +
    " million people speak " +
    language
);

console.log(
  `${country} is in ${continent} and its ${population} million people speak ${language}`
);

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark);
console.log(BMIJohn);

const markHigherBmi = BMIMark > BMIJohn;
console.log(markHigherBmi);
