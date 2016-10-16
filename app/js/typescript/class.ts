// Class
class Contact{
  // properties
  name:string;
  phone:string;
  email:string;

  // methods
  greetContact = () => {
    return `Hi ${this.name}!`;
  }

  // constructor
  constructor(name:string, phone:string, email:string){
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

// inheritance and Static
class Mobile extends Contact{
  brand: string;
  model: string;
  color: string;

  static buildMobile = () => {
    return `Static methods are only in the class and not in instances`;
  }

  // extends constructor
  constructor(name:string, phone:string, email:string, brand:string, model:string, color:string){
    super(name, phone, email);
    this.brand = brand;
    this.model = model;
    this.color = color;
  }
}

// instances
let brandon = new Contact('Brandon Valverde Martinez', '8448-68-00', 'brandon-valverder@hotmail.com');
console.log(JSON.stringify(brandon));
console.log(brandon.greetContact());

let brandonMobile = new Mobile('Brandon Valverde Martinez', '8448-68-00', 'brandon-valverder@hotmail.com', 'Samsung', 'S6 Edge', 'Black');
console.log(JSON.stringify(brandonMobile));
console.log(brandonMobile.greetContact());

// abstract and interfaces

interface principalInformation {
  brand: string;
  model: string;
  color: string;
  year: number;
}

abstract class car implements principalInformation{
  brand: string;
  model: string;
  color: string;
  year: number;

  abstract printInfo = () => {};

  constructor(brand: string, model: string, color: string, year: number){
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
  }

}

class newCar extends car{

  printInfo = () =>{
    return `${this.brand} model ${this.model} year ${this.year} in color ${this.color}.`;
}

  constructor(brand: string, model: string, color: string, year: number){
    super(brand, model, color, year);
  }
}

let kia = new newCar('Kia', 'Sportage', 'gray', 2016);
console.log(kia.printInfo());
