console.log("Hello loops!");

/*  
1. When the iterations are known, use for loop
1. When the condition is known and not iterations, use while loop 
1. When the condition is known and code has to be executed at least one before evaluating the condition, use do while
*/

/* for (let i = 1; i <= 10; i++) {
  // console.log(i);
} */

/* let ip = 0;
let house = 100; */

/* while (ip != 100) {
  ip = ip + 1;
  console.log("Steps taken: " + ip);
} */

/* do {
  ip = ip + 1;
  console.log("Steps taken: " + ip);
} while (ip != house); */

let number = 40;
let guess;

/* do {
  guess = parseInt(prompt("Guess a number"));
  if (guess == number) {
    alert("Winner");
    break;
  }
} while (guess != 0); */

while (guess != 0) {
  guess = parseInt(prompt("Guess a number"));
  if (guess == number) {
    alert("Winner");
    break;
  }
}
