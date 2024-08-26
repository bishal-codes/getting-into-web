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
// const greet = function () {
//   console.log("Hello Bishal");
// };

// arrow function
// const greet = () => {
//   console.log("Hello Bishal");
// };

/**
 * arrow function
 *     - arguments in function declaration
 *     - no arguments in arrow function
 *     - no this binding in arrow function
 * hoisting
 *     - return statement - implicit return: no need to write return keyword
 *    - function declaration - can be called before declaration
 *     - explicit return: need to write return keyword
 */

/**
 * template literals: ES6
 *   - double quotes: ""
 *  - single quotes: ''
 *  - backticks: ``
 *    - string interpolation: `${}`
 *   - multiline strings: ``
 *   - expression inside string
 *   - string concatenation: +
 */

/**
 * destructuring: ES6
 *  - object destructuring: {}
 * - array destructuring: []
 * - nested destructuring
 */
// object destructuring
const { name: personName, age: personAge } = person;

// array destructuring
const [hobby1, hobby2, hobby3] = hobbies;

// nested destructuring
const person1 = {
  name: "Bishal",
  age: 20,
  address: {
    city: "Kathmandu",
    country: "Nepal",
  },
};

const {
  name: personName1,
  age: personAge1,
  address: { city, country },
} = person1;

/**
 * spread operator: ES6
 * - array spread operator: [...]
 * - object spread operator: {...}
 * - shallow copy
 */

// array spread operator
const hobbiesCopy = [...hobbies];

// object spread operator
const personCopy = { ...person };

// shallow copy
const person2 = {
  name: "Bishal",
  age: 20,
  address: {
    city: "Kathmandu",
    country: "Nepal",
  },
};

const personCopy1 = { ...person2 };

/**
 * rest operator: ES6
 * - array rest operator: ...
 * - object rest operator: ...
 * - rest parameter in function
 */

// array rest operator
const [hobby4, ...restHobbies] = hobbies;

// object rest operator
const { name: personName2, ...restPerson } = person;

// rest parameter in function
function greetPerson(name, ...restArgs) {
  console.log(name);
  console.log(restArgs);
}

greetPerson("Bishal", 20, "Kathmandu", "Nepal");

/**
 * default parameters: ES6
 * - default parameters in function
 */

function greetPerson1(name = "Bishal", age = 20) {
  console.log(name);
  console.log(age);
}

greetPerson1();
greetPerson1("Bishal", 20);

/**
 * ternary operator
 * - condition ? true : false
 */

const isAdult = age >= 18 ? "Adult" : "Child";

/**
 * logical operators
 * - AND: &&
 * - OR: ||
 * - NOT: !
 */

const isAdult1 = age >= 18 && "Adult";
const isAdult2 = age < 18 || "Child";

/**
 * comparison operators
 * - ==: loose equality
 * - ===: strict equality
 * - !=: loose inequality
 * - !==: strict inequality
 * - >: greater than
 * - <: less than
 * - >=: greater than or equal to
 * - <=: less than or equal to
 */

const isEqual = 10 == "10"; // true
const isStrictEqual = 10 === "10"; // false

// loose inequality
const isNotEqual = 10 != "10"; // false
const isStrictNotEqual = 10 !== "10"; // true

// greater than
const isGreaterThan = 10 > 5; // true

// less than
const isLessThan = 10 < 5; // false

// greater than or equal to
const isGreaterThanOrEqual = 10 >= 10; // true

// less than or equal to
const isLessThanOrEqual = 10 <= 5; // false

/**
 * Date
 * - new Date()
 * - getFullYear()
 * - getMonth()
 * - getDate()
 * - getDay()
 * - getHours()
 * - getMinutes()
 * - getSeconds()
 * - getMilliseconds()
 * - getTime()
 * - toDateString()
 * - toTimeString()
 * - toLocaleDateString()
 * - toLocaleTimeString()
 * - toUTCString()
 */

const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getTime());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.toUTCString());

/**
 * loops
 * - for loop
 * - while loop
 * - do while loop
 * - for of loop
 * - for in loop
 */

// for loop
for (let i = 0; i < hobbies.length; i++) {
  console.log(hobbies[i]);
}

// while loop
let i = 0;
while (i < hobbies.length) {
  console.log(hobbies[i]);
  i++;
}

// do while loop
let j = 0;
do {
  console.log(hobbies[j]);
  j++;
} while (j < hobbies.length);

// for of loop
for (const hobby of hobbies) {
  console.log(hobby);
}

// for in loop
for (const key in person) {
  console.log(key, person[key]);
}

/**
 * array methods
 * - forEach
 * - map
 * - filter
 * - find
 * - reduce
 * - some
 * - every
 * - includes
 */

// forEach
hobbies.forEach((hobby) => console.log(hobby));

// map
const hobbyItems = hobbies.map((hobby) => `<li>${hobby}</li>`);
