function add(a, b) {
  return a + b;
}

function square(c) {
  return c * c;
}

function multiply(a, b) {
  return a * b;
}

/* ------------------------------------------ */

function componseFn(fn1, fn2) {
  return function (val1, val2) {
    return fn2(fn1(val1, val2));
  };
}

// convert componseFn to ES6 JS
const modernComponseFn = (fn1, fn2) => (val1, val2) => fn2(fn1(val1, val2));

/* ------------------------------------------ */

/* ----------Use case---------------------- */

const taskAddSquare = componseFn(add, square);
const modernTaskAddSquare = modernComponseFn(add, square);
const taskMulSquare = componseFn(multiply, square);

console.log(`Add, Square: ${taskAddSquare(2, 3)}`);
console.log(`Modern ES: Add, Square: ${modernTaskAddSquare(2, 3)}`);

console.log(`Multiply, Square: ${taskMulSquare(2, 5)}`);

/* 
The tutorial was not very cleary in explaining about reduce() in JS. Prefer another tutorial for this concept and then update the script
*/
