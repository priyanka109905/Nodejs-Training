/*
FUNCTIONS
Function are building blocks in javascript
it is basically set of statments that perform
a task or calculates a value
*/

function greet(){
    console.log('Hello World');
}
greet();

/*
name is parameter of greet1 function
and john is an argument of greet1 function
argument is the actual value with supply for that parameter
*/
function greet1(name){
    console.log('Hello'+name);

}
greet1('JOHN')

//Function can have multiple parameter
function greet2(name,lastName){
    console.log('Hello'+ name + ' '  + lastName)

}

greet2('John')
greet2('john','adsmith')

function square(number){
    return number*number;
}
console.log(square(2));

