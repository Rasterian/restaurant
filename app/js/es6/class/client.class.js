import Car from '../class/car.class';

class Client extends Car{
  name;
  age;
  gender;
  phone;

  buildClient = () => {
    return `Client ${this.name} has a car ${this.brand} model ${this.model} in color ${this.color} year ${this.year}`;
  }

  constructor(brand, model, color, year, name, age, gender, phone){
    super(brand, model, color, year);
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.phone = phone;
  }
}

export {Client as default};
