// divisible by 3 =fizz
//divisible by 5 =buzz
//divisible by 3 or 5= fizzBuzz
//not divisilble by 3 or 5=input
//not a number=nan


function fizzBuzz(input){
    if(typeof input !=='number')
    return NaN;

    if(input % 3===0)
    return 'fizz';

    if(input % 5===0)
    return 'buzz';

    if((input %3===0)&&(input % 5===0))
    return 'fizzbuzz';

    return input;
}
console.log(fizzBuzz(50));