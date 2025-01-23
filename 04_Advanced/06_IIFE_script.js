// IIFE - Imediately Invoked Function Expression is a Javascript function that runs as soon as it is defined

// syntax is below:
(function fnName() {})();

// example 1
(function add(a, b) {
  let age = 20;
  console.log(20 + b);
})(2, 3);

// example 2
(function saySomething() {
  let age = "age: ";
  console.log(age + "Hey");
})();

// example 1 in ES6
((a, b) => console.log(a + b))(4, 5);

// example 2 in ES6
(() => console.log("Hey from ES6"))();

const value = (() => 100)();
console.log(value);

// one way of assigning response to data
let data;
async function getData() {
  data = await fetch("");
}

// another way of assigning response to data using IIFE. Difference it assigns automatically
const data2 = (async () => {
  // await fetch("");
  console.log("Print2");
})(); // Print2

const data3 = async () => {
  console.log("Print3");
};
console.log(data3()); // Print3
