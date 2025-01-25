function init() {
  const name = "Pratik";
  function displayName() {
    console.log(name);
  }
  displayName(); // this function is known as closure because of its references to surrounding state
}

init(); // will print the value declared in name const

/*  ------------ Another way---------------- */

function init2() {
  const name = "Goyal";
  function displayName2() {
    console.log(name);
  }
  return displayName2; // IMPORTANT: don't add paranthesis
}

let fn = init2();
fn(); // directly calling the inner function

/* ----------Use case---------------------- */

function adder(num) {
  function addTo(b) {
    console.log(num + b);
  }
  return addTo;
}

const addFn = adder(6);
const addFn2 = adder(10);

addFn(1); // 7
addFn(2); // 8
addFn(3); // 9

addFn2(1); // 11
addFn2(2); // 12
addFn2(3); // 13

/* -------------------------------------------------------------------------------- */

/* ----------Use case---------------------- */

function counter() {
  let a = 1;
  function innerFunction() {
    console.log(a++);
  }
  return innerFunction;
}

const countFn = counter();

countFn();
countFn();

/* -------------------------------------------------------------------------------- */

/* ----------Currying use case

We need to ensure all the parameters i.e. a, b, c are available before doing the sum operation. To ensure this, we can use currying method

Add---------------------- */

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log(add(2)(3)(4)); // 9

console.log(add(2)(3));
/* ƒ (c) {
      return a + b + c;
    } */

console.log(add(2));
/* ƒ (b) {
    return function (c) {
      return a + b + c;
    };
  } */

/* -----------Same use case of Currying in modern JS

Add-----------------------------
*/

const addModernJS = (a) => (b) => (c) => a + b + c;
console.log(addModernJS(11)(12)(13));

/* -------------------------------------------------------------------------------- */

/* -----------Another use case of Currying

Sending email-----------------------------
*/

function sendEmail(to) {
  return function (sub) {
    return function (body) {
      console.log(
        `Sending email: Receipient is ${to}, subject is ${sub} and body is ${body}`,
      );
    };
  };
}

const user1 = sendEmail("pratikgoyal9@github.com");
const user2 = user1("Send new order");

user2("Here is your body"); // Sending email: Receipient is pratikgoyal9@github.com, subject is Send new order and body is Here is your body

/* -------------------------------------------------------------------------------- */

/* -----------Same  use case of Currying in modern JS

Sending email-----------------------------
*/

const sendEmail3 = (to) => (sub) => (body) =>
  `Sending emails: Receipient is ${to}, subject is ${sub} and body is  ${body}`;

console.log(
  sendEmail3("pratikgoyal9@github.com")("Send new orders")("Here is your body"),
); // Sending emails: Receipient is pratikgoyal9@github.com, subject is Send new orders and body is Here is your body
