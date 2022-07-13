"use strict";
/*
const printMyName = (name) => {
  console.log(name);
};

printMyName("Leo");
*/

// class Human {
//   gender = "male";

//   printGender = () => {
//     console.log(this.gender);
//   };
// }

// class Person extends Human {
//   name = "Max";
//   gender = `female`;

//   printMyName = () => {
//     console.log(this.name);
//   };
// }

// const person = new Person();
// person.printMyName();
// person.printGender();

// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4];

// console.log(newNumbers);

// const person = {
//   name: "Leo",
// };

// const newPerson = {
//   ...person,
//   age: 25,
// };

// console.log(newPerson);

const numbers = [1, 2, 3];

const doubleNumArray = numbers.map((num) => {
  return num * 2;
});

console.log(numbers);
console.log(doubleNumArray);
