const age = 81;

/* if (age >= 80) {
  console.log("You are senior to vote");
} else if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
} */

/* age >= 16 ? console.log("You can vote") : console.log("You cannot vote"); */

let result = age >= 16 ? "Yes" : "No";
console.log(result);

/* switch case ----------------------------------------------------------------------------------------------- */

const option = 5;

switch (option) {
  case 1:
    console.log("Namaste!");
    break;
  case 2:
    console.log("Hello");
    break;
  case 3:
    console.log("Bonjour");
    break;
  default:
    console.log("Invalid option");
}

// when break is not used, it will start executing from the matched call and cases below them

/* Build a calculator */

const a = 100;
const b = 50;
const opt = "/";

switch (opt) {
  case "+":
    console.log(a + b);
    break;
  case "-":
    console.log(a - b);
    break;
  case "*":
    console.log(a * b);
    break;
  case "/":
    console.log(a / b);
    break;
}
