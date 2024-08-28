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

/**
 * null coalescing operator: ES11
 *  - ??: to check null or undefined value
 * - ??= : to assign default value
 */

// null coalescing operator
const name1 = null ?? "Bishal"; // Bishal
const name2 = undefined ?? "Bishal"; // Bishal
const name3 = false ?? "Bishal"; // false

// null coalescing assignment operator
let name4;
name4 ??= "Bishal"; // Bishal

/**
 * optional chaining operator: ES11
 * - ?. : to check null or undefined value
 */

// optional chaining operator
const person3 = {
  name: "Bishal",
  age: 20,
};

const city1 = person3.address?.city; // undefined

/**
 * Ternary operator: ES11
 * - condition ? true : false
 */

// ternary operator
const isAdult3 = age >= 18 ? "Adult" : "Child";

/**
 * promise: ES6
 * - then
 * - catch
 * - finally
 */

// promise: is a placeholder for a value that will be available in the future
// promise is either resolved or rejected
// promise is asynchronous
// resolve function will be called when the promise is resolved
// reject function will be called when the promise is rejected

let hasError = false;
const promise = new Promise((resolve, reject) => {
  // ! - not operator
  if (!hasError) {
    resolve("Success");
  } else {
    reject("Error");
  }
});

promise
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finally"));

/**
 * async/await: ES8
 * - async function is a function that returns a promise
 * writing async code is non-blocking
 * - await keyword is used to wait for the promise to resolve
 * - error handling: try/catch is used to handle error in async/await
 * - async/await is a syntactic sugar for promise
 */

// async function
async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally");
  }
}

fetchData();

/**
 * timer functions
 * setTimeout
 * - setTimeout: to run a function after a certain time
 * - clearTimeout: to clear the setTimeout
 */

// setTimeout
const timeout = setTimeout(() => {
  console.log("Hello");
}, 3000);

function greet1() {
  console.log("Hello");
}

// greet1 needs not to be a function expression as setTimeout expects a function
setTimeout(greet1, 3000);

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function greet2() {
  console.log("before sleep");
  await sleep(3000);
  console.log("after sleep");
}

greet2();

/**
 * HTML - Hyper Text Markup Language
 *      - structure of web page
 *      - tags: opening tag, closing tag, self-closing tag
 *      - attributes: name, value
 *      - nesting of tags
 *      - semantic tags: header, footer, section, article, aside, nav, main
 *      - form elements: form, input, button, select, option, textarea
 *      - table elements: table, thead, tbody, tr, th, td
 */

/**
 * DOM - Document Object Model
 *     - window object
 *     - document object
 *     - getElementById
 *     - querySelector
 *     - querySelectorAll
 *     - createElement
 *     - innerHTML
 *     - innerText
 */

/**
 * event listeners
 * - addEventListener
 * - removeEventListener
 * - event object
 * - preventDefault
 */

/**
 * string methods
 * - toUpperCase
 * - toLowerCase
 * - trim
 * - includes
 * - startsWith
 * - endsWith
 * - split
 * - slice
 * - substring
 * - substr
 * - replace
 * - indexOf
 * - lastIndexOf
 * - charAt
 * - charCodeAt
 * - concat
 * - repeat
 * - padStart
 * - padEnd
 * - trimStart
 * - trimEnd
 * - match
 * - search
 * - localeCompare
 * - localeCompare
 */

/**
 * array methods
 * - push
 * - pop
 * - shift
 * - unshift
 * - splice
 * - slice
 * - concat
 * - join
 * - reverse
 * - sort
 * - indexOf
 * - lastIndexOf
 * - includes
 * - find
 * - findIndex
 * - filter
 * - map
 * - reduce
 * - some
 * - every
 * - forEach
 */

/**
 * object methods
 * - keys
 * - values
 *  - entries
 * - hasOwnProperty
 * - assign
 * - freeze
 * - seal
 * - defineProperty
 * - defineProperties
 * - getOwnPropertyDescriptor
 * - getOwnPropertyDescriptors
 * - getPrototypeOf
 * - setPrototypeOf
 * - is
 * - isExtensible
 * - isFrozen
 * - isSealed
 * - preventExtensions
 * - getOwnPropertyNames
 * - create
 * - fromEntries
 */
