// HOF - Higher Order Function
// funtion that return another function

function add1(number) {
  return number + 1;
}
function add2(number) {
  return number + 2;
}
function add3(number) {
  return number + 3;
}

function makeAdder(numberToAdd) {
  return number => {
    return number + numberToAdd;
  };
}

const add5 = makeAdder(5);
const add13 = makeAdder(13);

function sandwichMaker(breadType) {
  function make(filling) {
    const res = breadType + " and " + filling;
    return res;
  }
  return make;
}
const shifonAnd = sandwichMaker("Shifon");
const s1 = shifonAnd("Cheese"); // Shifon and cheese
const s2 = shifonAnd("Mustard"); // Shifon and mustard
console.log("Yammii", s1, "|", s2);

const halaAnd = sandwichMaker("Hala");
const s3 = halaAnd("Honey");
const s4 = halaAnd("Hummus");
console.log("Yammii", s3, "|", s4);
