// Constructor Function
// Function that instantiate an object
function Person(name, age) {
  this.name = name;
  this.age = age;

  // this is not the way 👇
  //   this.sayHello = function () {
  //     console.log(`hello im ${this.name} and im ${this.age}`);
  //   };
}

Person.prototype.sayHello = function () {
  console.log(`hello im ${this.name} and im ${this.age}`);
};

const p1 = new Person("bob", 13);
const p2 = new Person("lala", 41);
const p3 = new Person("bibi", 71);

p1.sayHello();

// static function (not on the instance)
Person.getWars = function () {
  return ["WW1", "WW2"];
};

const wars = Person.getWars();
console.log(wars);
