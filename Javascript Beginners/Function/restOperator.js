/*
When we apply the rest operator
to a parameter of a function, we can pass a varying number of
arguments and the rest operator will take all of them and
put them in an array

we cacnot have parameter after using the rest operator
*/

function sum(...args){
    return args.reduce((a,b)=>a+b);
}
console.log(sum(2,3,4,5,6));