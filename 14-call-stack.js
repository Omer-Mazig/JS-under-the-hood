// call stack example

// simple example
// console.log("start");

// function foo() {
//   bar();
//   console.log("foo");
// }

// function bar() {
//   console.log("bar");
// }

// foo();
// console.log("end");

//////////////////////////////////////////////////////////////////////////////////

// long running function example

// console.log("start");

// slowFunction();

// console.log("end");

////////////////////////////////////////////////////////////////////////////////////

// setTimeout(() => {
//   console.log("setTimeout!");
// }, 0); // change to 0, 1000, 2000, 3000

// slowFunction();

////////////////////////////////////////////////////////////////////////////////////

// Macrotask: setTimeout
setTimeout(() => {
  console.log("setTimeout"); // This is a macrotask
}, 0);

slowFunction();

// Microtask: Promise
Promise.resolve().then(() => {
  console.log("Promise.then"); // This is a microtask
});

////////////////////////////////////////////////////////////////////////////////////

function slowFunction() {
  console.log("slowFunction start");
  console.time("time of slowFunction ");
  let result = 0;
  for (let i = Math.pow(12, 7); i >= 0; i--) {
    result += Math.atan(i) * Math.tan(i);
  }
  console.timeEnd("time of slowFunction ");
  console.log("slowFunction end");
}

function onClick() {
  console.log("click");
}
