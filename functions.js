function getName() {
  console.log("Bishal");
}

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

user.greet();

// this keyword
console.log(this); // {}
// console.log(globalThis);
