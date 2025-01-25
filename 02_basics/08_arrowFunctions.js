// function syntax
function sayHello(a, b) {
  return a + b;
}
console.log(sayHello(1, 2)); // 3

// 'arguments' keyword or object is only available in function and not in arrow function. If used in arrow function, it will return error of uncaught reference error
function sayHelloV2() {
  console.log(arguments);
}
sayHelloV2(3, 4, 5, 6); //

// arrow function when there is no body
const addV1 = (a, b) => a + b;
console.log(addV1(3, 4)); // 7

// arrow function when there is body
const addV2 = (a, b) => {
  // statement 1 or more
  return a + b;
};
console.log(addV2(12, 13)); // 25

// arrow function when there are unlimited parameters, use 'spread operator'
const addV3 = (...nums) => console.log(...nums);
addV3(10, 20, 30);

// Hoisting
/* 
1. Function can be called before or after it's declaration. JS first stores the function in memory, hence it works
1. Only available in normal functions
1. Not available in arrow functions
*/

// 'this' keyword
/* 
1. 'this' can be used only in normal function. Scope of a normal function is limited to the function where it is called, hence 'this' works fine
1. 'this' cannot be used in arrow function. Scope of arrow function is global. Using 'this' refers to window object of the browser 
*/
const object1 = {
  age: 18,
  myFunction: function () {
    console.log(this.age);
  },
  myArrowFunction: () => {
    console.log(this.age);
  },
};
object1.myFunction(); // 18
object1.myArrowFunction(); // undefined
