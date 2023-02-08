// we don't want the value of variable change
// beacause it's going to create all kinds of bugs
// in our application in those situation instead
// of variables we use a constant so value of variable
// the name implies can change but value of constant cannot change so


let intrstRate=0.3
intrstRate=1;
console.log(intrstRate);


const interestRate2=0.9;
console.log(interestRate2);

const intrstRate1=0.9
intrstRate1=9
console.log(intrstRate1);

//TypeError: Assignment to constant variable.
// if you want to reasiign the variable then use let
