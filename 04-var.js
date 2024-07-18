"use strict";

// how it looks:
function bar_1() {
  console.log("baba before:", baba);
  var baba = "baba";
  console.log("baba after:", baba);
}

// how it works:
function bar_2() {
  var baba;
  console.log("baba before:", baba);
  baba = "baba";
  console.log("baba after:", baba);
}

// var x = "x"; // this is danger
// var x = 15; // this is danger

// bar_1();

// var x = "im a global variable";

// change to "let" and see what the result
function foo() {
  var x = "im a local variable";
  console.log(x);

  if (true) {
    // var is function scope
    var x = "asdsadsa";
    console.log(x);
  }

  console.log(x);
}

// foo();

// console.log(x);

var value = "x";

// how it looks:
function varIsCrazy() {
  if (!value) {
    var value = "y";
  }
  console.log(value);
}

// how it works:
function varIsCrazy() {
  var value;
  if (!value) {
    value = "y";
  }
  console.log(value);
}

varIsCrazy();
