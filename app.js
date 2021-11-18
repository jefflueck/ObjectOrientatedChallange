class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  honk() {
    return `Beep`;
  }
  toString() {
    return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
  }
}

class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  revEngine() {
    return `VROOM!!!`;
  }
}

// Still iterating on solution.
class Garage {
  constructor(vehicles, capacity) {
    this.vehicles = vehicles[];
    this.capacity = capacity;
  }
  add(vehicle) {
    if (vehicles > capacity) {
      return `Sorry were full`;
    } else {
      vehicle.push(vehicles[]);
    }
  }
}
