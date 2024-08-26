// function greet(name) {
//   console.log(`Hey ${name}`);
// }

// setTimeout(() => greet("Bishal"), 3000);

// HANDLE ASYNCHRONOUS OPERATIONS
// const orderingFoodOnline = (pizza, callback) => {
//   console.log("ordering pizza from dominos");

//   const response = {
//     status: "success",
//     pizza: pizza,
//   };

//   setTimeout(() => callback(response), 3000);
// };

// const dominosServerResponse = (response) => {
//   if (response.status === "success") {
//     console.log(`${response.pizza} is available online`);
//   } else {
//     console.log(`Not available online`);
//   }
// };

// orderingFoodOnline("peri peri chicken pizza", dominosServerResponse);

doThisTasks(() => {
  doThisFirst(() => {
    doThisSecond(() => {
      // ....
    });
  });
});

// Promise
doThisTasks()
  .then(doThisFirst)
  .then(doThisSecond)
  .then(() => {});

// MAKING WEB UI DYNAMIC - eventListeners uses  callback
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked");
});
