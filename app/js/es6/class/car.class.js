class Car{
  brand;
  model;
  color;
  year;

  buildCar = () => {
    return `Car ${this.brand} model ${this.model} in color ${this.color} year ${this.year}`;
  }

  constructor(brand, model, color, year){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
  }
}

export {Car as default};
