"use strict";

// x = 100;
// console.log(x);
// console.log("Typeof X is:", typeof x);

function makeBaba() {
  baba = "baba";
}

// makeBaba();
// console.log(baba);

// console.log("this", this);

function foo() {
  console.log("this", this);
}

console.log("foo === window.foo", foo === window.foo); // true

foo(); // will print undefined is strict mode
window.foo(); // will print window object even in strict mode
