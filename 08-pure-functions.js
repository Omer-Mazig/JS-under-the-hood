// impure functions:
let x = 5;

function sum(num) {
  return x + num;
}

function addToX() {
  x++;
}

// const numbers = [1, 2, 3];

function impureGetDoubles() {
  for (let i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * 2;
  }
}

const person = {
  name: "baba",
  age: 53,
};

function impureIncrementAge(p) {
  p.age++;
}

// Pure functions:
function pureIncrementAge(p) {
  return {
    ...p,
    age: p.age + 1,
  };
}

const numbers = [1, 2, 3];

function pureGetDoubles(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    result.push(nums[i] * 2);
  }
  return result;
}
