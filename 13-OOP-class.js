// Class
// Synthetic sugar for constructor function

class Person {
  constructor(name, age, secret) {
    this.name = name;
    this.age = age;
  }

  baba = 18;

  static getWars() {
    return ["WW1", "WW2"];
  }

  sayHello() {
    console.log(`hello im ${this.name} and im ${this.age}`);
  }

  setAge(newAge) {
    if (typeof newAge === "number" && !isNaN(newAge)) {
      this.age = newAge;
    } else {
      throw new Error("age nust be a number!");
    }
    return this.age;
  }
}

const p1 = new Person("bob", 13, "im shy");
