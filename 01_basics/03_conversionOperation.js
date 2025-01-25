let score1 = "33";
console.log(typeof score1); // string
let numberInScore1 = Number(score1); // convert string to a number
console.log(numberInScore1); // 33
console.log(typeof numberInScore1); // number

let score2 = "33ab";
let numberInScore2 = Number(score2);
console.log(numberInScore2); // NaN
console.log(typeof numberInScore1); // number

let score3 = undefined;
let numberInScore3 = Number(score3);
console.log(numberInScore3); // NaN
console.log(typeof numberInScore3); // number

let score4 = null;
let numberInScore4 = Number(score4);
console.log(numberInScore4); // 0
console.log(typeof numberInScore4); // number

let score5 = true;
let numberInScore5 = Number(score5);
console.log(numberInScore5); // 1
console.log(typeof numberInScore5); // number
