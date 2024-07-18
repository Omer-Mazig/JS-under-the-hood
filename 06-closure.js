"use strict";

// init();
function init() {
  const name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms the closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}

function createBox() {
  let value = 0; // private vairable
  const baba = "s";

  const box = {
    get: function () {
      return value;
    },
    set: function (newValue) {
      if (typeof newValue !== "number") return;
      if (newValue < 0) return;
      value = newValue;
    },
  };

  return box;
}

const box_1 = createBox();
const box_2 = createBox();
