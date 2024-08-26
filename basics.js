/**
 * about JS
 * data types, variables: let, var, const
 * comments
 * arrays
 * functions
 */

let name = "Bishal"; // string
const age = 20; // number
const isMale = true; // boolean (true/false)
const hobbies = ["reading", "coding", "gaming"]; // array
const person = {
  name: "Bishal",
  age: 20,
  hobbies: hobbies,
  isMale: isMale,
}; // object

// function declaration
function greet() {
  console.log("Hello Bishal");
}

// function expression
const greet = function () {
  console.log("Hello Bishal");
};

// arrow function
const greet = () => {
  console.log("Hello Bishal");
};

/**
 * arrow function
 *     - arguments in function declaration
 *     - no arguments in arrow function
 *     - no this binding in arrow function
 * hoisting
 *     - return statement - implicit return
 */
