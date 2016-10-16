'use strict';
var age = 22;
var id = 115650987;
var person;
(function (person) {
    person.personName = 'Brandon';
    person.personId = id;
    person.personAge = age;
})(person || (person = {}));
var printPerson = function (person) {
    console.log(person);
};
printPerson(person);
var father = {
    name: 'Luis',
    age: 50,
    sons: 3,
};
var house = {
    place: {
        city: 'Pavas',
        country: 'Costa Rica'
    },
    rooms: 3,
    color: 'red'
};
var fatherName = father.name;
var houseCity = house.place.city;
console.log(fatherName + " lives in " + houseCity);
var names = ['Brandon', 'Joshua', 'Jonathan'];
var names2 = ['Zayda', 'Luis'];
var family = names.concat(names2, ['Nanda', 'Nathy']);
var _a = family || [], first = _a[0], more = _a.slice(1);
console.log(first);
var printNames = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i - 0] = arguments[_i];
    }
    for (var _a = 0, names_1 = names; _a < names_1.length; _a++) {
        var name_1 = names_1[_a];
        console.log("Hi, " + name_1);
    }
};
printNames.apply(void 0, family);
