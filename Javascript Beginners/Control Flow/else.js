/*
if hour is betwwn 6am and 12 pm : good morning
If it is between 12pm to 6pm :Good Afternnon
otherwise good evening
*/

let hour=19;
if(hour>=6 && hour<=12){
console.log("Good Morning");
}
else if(hour>=12 && hour<=18){
console.log("Good Agternoon");
}
else{
    console.log("Good Evening");
}