"use strict";
//objects 
const person = {
    name: 'John',
    age: 30,
    isEmployed: true,
    hobbies: ['reading', 'sports', 'music'],
    salary: function () {
        return this.age > 30 && this.age < 40 ? 30000 : 20000;
    }
};
console.log(person.name, person['name']);
// for in loop
for (let key in person) {
    console.log(person[key]);
}
console.log(person.salary());
