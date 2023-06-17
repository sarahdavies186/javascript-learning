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

// const numNeighbours = Number(
//   prompt("How many neighbour countries does your country have?")
// );
// if (numNeighbours === 1) {
//   console.log("only 1 border");
// } else if (numNeighbours > 1) {
//   console.log("More than 1 border");
// } else {
//   console.log("no borders");
// }

const scoreDolphins = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoals > scoreDolphins) {
  console.log("Koalas win the trophy");
} else {
  console.log("Both win the trophy");
}

if (language === "English" && population > 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

switch (language) {
  case "Chinese" || "Mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "Spanish":
    console.log("2nd place");
    break;
  case "English":
    console.log("3rd place");
    break;
  default:
    console.log("great language");
}

console.log(
  `${country}'s population is ${population >= 33 ? "above" : "below"} average`
);

// Steven needs a very simple tip calculator for whenever he goes to eat in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

// Your tasks:

// Calculate the tip, depending on the bill value. Create a variable called tip for this. It's not allowed to use an if...else statement (if it's easier for you, you can start with an if...else statement, and then try to convert it to a ternary operator).

// Print a string to the console containing the bill value, the tip, and the final value (bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string. Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
console.log(
  `The bill was ${bill}, the tip was ${tip} and the total value ${bill + tip}`
);
