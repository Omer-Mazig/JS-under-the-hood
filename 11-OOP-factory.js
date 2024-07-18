// Factory Function
// Function that return an object

function createPerson(name, age) {
  const person = {
    name,
    age,
    sayHello() {
      console.log(`hello im ${this.name} and im ${this.age}`);
    },
    logMyself() {
      console.log(this);
    },
  };

  return person;
}

const p1 = createPerson("bob", 13);
const p2 = createPerson("lala", 40);
