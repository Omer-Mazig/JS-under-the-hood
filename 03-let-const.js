"use strict";

const x = "Global";
const baba = "Im also global...";

function foo() {
  const y = "function scope";
  const baba = "yeah, but I'm local so im hiding you!";
  console.log("baba:", baba);

  if (true) {
    const z = "Block scope";
    console.log(x); // Global
    console.log(y); // function scope
    console.log(z); // Block scope
  }
  console.log(x); // Global
  console.log(y); // function scope
  console.log(z); // ReferenceError: z is not defined
}

// try catch so the script doesn't stop
try {
  foo();
} catch (e) {
  console.error("Error:", e);
}

console.log("baba:", baba);
