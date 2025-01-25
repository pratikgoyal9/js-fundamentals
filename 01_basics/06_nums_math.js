const scoreOne = 100;
console.log(scoreOne); // 100

const scoreTwo = new Number(100); // define the type of variable to be always number type
console.log(scoreTwo); // [Number: 100]

const scoreThree = 123.678;
console.log(scoreThree.toPrecision(4)); // 123.7

const scoreFour = 1000000000;
console.log(scoreFour.toLocaleString()); // 1,000,000,000
console.log(scoreFour.toLocaleString("en-IN")); // 1,00,00,00,000
console.log(scoreFour.toLocaleString("nl-NL")); // 1.000.000.000

console.log(Math.abs(-4)); // 4

console.log(Math.round(4.5)); // 5

console.log(Math.ceil(4.2)); //  5

console.log(Math.floor(4.2)); //  4

console.log(Math.min(2, 4, 6, 14, 8)); // 2

console.log(Math.max(2, 4, 6, 14, 8)); // 14

console.log(Math.random()); // prints random value >= 0 and < 1 like 0.72763920...

/* 
Generate random num between min and max: 

Math.floor(Math.random() * (max - min + 1) + min);
*/
