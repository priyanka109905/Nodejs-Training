// Refrence Type
// 1 OBJECT 2 ARRAYS 3. FUNCTIONS

// 1. OBJECT
/*
oject in javascipt and other programming language
is like an object in real life
think of person a person has name age address
let name='Mosh'
let age=30;
*/

let person={
    name:'Mosh',
    age:30
};

console.log(person);

/*
if i want to change a name of that person
we can use DOT NOTATION
*/
person.name='john';
console.log(person);
console.log(person.name)

// BRACKET NOTATION
person['name']='Merry'
console.log(person.name)
