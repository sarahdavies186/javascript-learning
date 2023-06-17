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
if (BMIMark > BMIJohn) {
  console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})`);
} else {
  console.log(`John's (${BMIJohn}) is higher than Mark's BMI (${BMIMark})`);
}

if (population > 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(`${country}'s population is below average`);
}

console.log(5 + 6 + "4" + 9 - 4 - 2);

const numNeighbours = Number(
  prompt("How many neighbour countries does your country have?")
);
if (numNeighbours === 1) {
  console.log("only 1 border");
} else if (numNeighbours > 1) {
  console.log("More than 1 border");
} else {
  console.log("no borders");
}
