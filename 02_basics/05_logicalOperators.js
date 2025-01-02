// AND (&&) -> All conditions must be true
// OR (||) -> Atleast one condition must be true
// NOT (!)  -> Converts True to False and vice versa

const age = 22;
const gender = "male";

if (age >= 18 || gender == "male") {
  console.log("You are an adult");
}

if (!(age % 2 == 1)) {
  console.log("Odd");
}
