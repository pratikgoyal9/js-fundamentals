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

const fn2 = adder(6);
const fn3 = adder(10);

fn2(1); // 7
fn2(2); // 8
fn2(3); // 9

fn3(1); // 11
fn3(2); // 12
fn3(3); // 13

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
