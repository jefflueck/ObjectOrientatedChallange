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
// My attempt to part four
class Garage extends Vehicle {
  constructor(make, model, year, capacity) {
    super(make, model, year);
    let vehicles = [];
    let startingCapacity = 0;
    vehicles = vehicles;
    startingCapacity = capacity;
  }
  add(vehicle) {
    if (vehicles.length < capacity.length) {
      if (vehicle instanceof !Car || !Motorcycle) {
        vehicle.push(vehicles);
      } else {
        return `The garage is full`;
      }
    }
  }
}

// Solution for Part four
class Garage {
  constructor(capacity) {
    this.vehicles = [];
    this.capacity = capacity;
  }

  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return 'Only vehicles are allowed in here!';
    }
    if (this.vehicles.length >= this.capacity) {
      return "Sorry, we're full.";
    }
    this.vehicles.push(newVehicle);
    return 'Vehicle added!';
  }
}
