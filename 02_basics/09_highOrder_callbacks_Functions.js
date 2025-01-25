/* 
1. subtract() is high order function because it accepts function as an argument
1. cb argument is a callback function
*/

function subtract(c, d, cb) {
  let final = c - d;
  cb(final);
}

subtract(10, 2, function (val) {
  console.log("Result: ", val);
}); // 8

subtract(10, 2, (res) => console.log("Result: ", res)); // 8

/* ************************************************************* */
function showResult(val) {
  console.log("Result: ", val);
}

subtract(10, 2, showResult); // 8

/* ************************************************************* */
// a function can also return a function

function add(a, b) {
  let result = a + b;
  return () => console.log(result);
}

let resultFunction = add(1, 4);
resultFunction();
