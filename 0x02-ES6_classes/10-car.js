export default class Car {
  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // Using spread syntax to create a new object with copied properties
    return new this.constructor(...Object.values(this));
  }
}
