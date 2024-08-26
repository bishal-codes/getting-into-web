// function getName() {
//   console.log("Bishal");
// }

// getName();

// function expression
const name = function () {
  console.log("Bishal");
};

// name();

const user = {
  name: "Bishal",
  age: 20,
  greet: function () {
    // console.log("Bishal");
    // console.log(this);
    console.log(`Hello, ${this.name}`);
  },
};

// user.greet();

// this keyword
// console.log(this); // {}
// console.log(globalThis);

/**
 * arrow function
 */

// getName();

function getName(name) {
  // logic
  console.log("normal fn", arguments);
  console.log("normal fn: Bishal");
  // return "Bishal"; // explicit return
}

// greetName();

const greetName = (name) => {
  // logic
  console.log("arrow fn", arguments);
  console.log("arrow fn: Bishal");
  // return "Bishal";
};

const getLocation = () => console.log("Kathmandu"); // IMPLICIT RETURN
// getLocation();
// greetName("Bishal");

const user1 = {
  name: "Bishal",
  age: 18,
  greet: () => {
    console.log("Hellow Bishal");
    console.log(this);
  },
};

user1.greet();
console.log(this);
