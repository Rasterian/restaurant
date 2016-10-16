var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Contact = (function () {
    function Contact(name, phone, email) {
        var _this = this;
        this.greetContact = function () {
            return "Hi " + _this.name + "!";
        };
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
    return Contact;
}());
var Mobile = (function (_super) {
    __extends(Mobile, _super);
    function Mobile(name, phone, email, brand, model, color) {
        _super.call(this, name, phone, email);
        this.brand = brand;
        this.model = model;
        this.color = color;
    }
    Mobile.buildMobile = function () {
        return "Static methods are only in the class and not in instances";
    };
    return Mobile;
}(Contact));
var brandon = new Contact('Brandon Valverde Martinez', '8448-68-00', 'brandon-valverder@hotmail.com');
console.log(JSON.stringify(brandon));
console.log(brandon.greetContact());
var brandonMobile = new Mobile('Brandon Valverde Martinez', '8448-68-00', 'brandon-valverder@hotmail.com', 'Samsung', 'S6 Edge', 'Black');
console.log(JSON.stringify(brandonMobile));
console.log(brandonMobile.greetContact());
var car = (function () {
    function car(brand, model, color, year) {
        this.printInfo = function () { };
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.year = year;
    }
    return car;
}());
var newCar = (function (_super) {
    __extends(newCar, _super);
    function newCar(brand, model, color, year) {
        var _this = this;
        _super.call(this, brand, model, color, year);
        this.printInfo = function () {
            return _this.brand + " model " + _this.model + " year " + _this.year + " in color " + _this.color + ".";
        };
    }
    return newCar;
}(car));
var kia = new newCar('Kia', 'Sportage', 'gray', 2016);
console.log(kia.printInfo());
