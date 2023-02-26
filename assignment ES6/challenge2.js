class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getDetails() {
      return `I have a ${this.make}, it is a ${this.model}`;
  }
}

class Mustang extends Car {
  constructor() {
    super("Ford", "Mustang");
  }
}

const myCar = new Mustang();
console.log(myCar.getDetails()); // Output: I have a Ford, it is a Mustang
console.log(myCar instanceof Car); // Output: true
console.log(myCar instanceof Mustang); // Output: true