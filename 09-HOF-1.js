// HOF - Higher Order Function
// funtion that takes a function (callback) as an argument

const numbers = [1, 2, 3, 4, 5];
const strings = ["higher", "order", "function"];

function getDouble(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] + arr[i]);
  }

  return res;
}

function getSquare(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i] * arr[i]);
  }

  return res;
}

function getUpperCase(arr) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i].toUpperCase());
  }

  return res;
}

function mapArrayValues(arr, callback) {
  const res = [];

  for (let i = 0; i < arr.length; i++) {
    res.push(callback(arr[i], i));
  }

  return res;
}

const doubles = mapArrayValues(numbers, number => {
  return number * 2;
});

const squares = mapArrayValues(numbers, number => {
  return number * number;
});

const upperCases = mapArrayValues(strings, (str, index) => {
  return str.toUpperCase() + " " + index;
});
