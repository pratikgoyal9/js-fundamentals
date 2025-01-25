function sayHello() {
  console.log("Hello");
}

sayHello();

// num1 and num2 are arguments
function add(num1, num2) {
  return num1 + num2;
}

// num1 and num2 are arguments
function multiply(num1, num2) {
  return num1 * num2;
}

add(1, 2); // 1 and 2 are known as parameters

let a = add(5, 9);
console.log(a);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
// ...nums is the rest parameter or spread operator
function addNumbersV1(...nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  return console.log(sum);
}

function addNumbersV2() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum = sum + arguments[i];
  }
  return console.log(sum);
}

addNumbersV1(1, 2); // 3
addNumbersV2(1, 2, 3, 7); // 13
