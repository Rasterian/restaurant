/*
 * ES6 fundamentals
 */

'use strict';

// let var
let age:number = 22;

// Constant
const id:number = 115650987;

// namespace
namespace person {
  export const personName:string = 'Brandon';
  export const personId:number = id;
  export let personAge:number = age;
}

// Arrow Function
const printPerson = (person:Object) => {
  console.log(person);
}
printPerson(person);

// Destructing objects
interface personInfo {
  name?: string,
  age?: number,
  sons?: number
}

const father : personInfo = {
  name: 'Luis',
  age: 50,
  sons: 3,
}

const house= {
  place: {
    city: 'Pavas',
    country: 'Costa Rica'
  },
  rooms: 3,
  color: 'red'
}

const {name: fatherName} = father;
const {place: {city: houseCity}} = house;
console.log(`${fatherName} lives in ${houseCity}`);

// Destructing Arrays

let names:string[] = ['Brandon', 'Joshua', 'Jonathan'];
let names2:string[] = ['Zayda', 'Luis'];
let family:string[] = [...names, ...names2, 'Nanda', 'Nathy'];

const[first, ...more] = family || [];
console.log(first);

const printNames = (...names) => {
  // forEach loop
  // names.forEach(name => {
  //     console.log(`Hello, ${name}`);
  // });
  // forIn loop
  // for(let name in names){
  //   console.log(`Hi, ${names[name]}`);
  // };

  // NEW forOf loop
  for(let name of names){
    console.log(`Hi, ${name}`);
  }
}
printNames(...family);
