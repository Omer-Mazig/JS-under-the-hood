"use strict";

// problem:
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000);
// }

// solution:
// for (var i = 0; i < 3; i++) {
//   wrapper(i);
// }

// function wrapper(newIndex) {
//   setTimeout(() => {
//     console.log(newIndex, i);
//   }, 1000);
// }

// solution: (with IFFE)
// for (var i = 0; i < 3; i++) {
//   (function (newIndex) {
//     setTimeout(() => {
//       console.log(newIndex, i);
//     }, 1000);
//   })(i);
// }

// modern solution:
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

// let that act like var
let i;
for (i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}
