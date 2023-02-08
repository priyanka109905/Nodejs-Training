
const array=[1,2,3,4,,null,undefined,0,NaN,'']

console.log(countTruthy(array));

function countTruthy(array){
let count=0;
for(let value of array)
if(value)
count++
return count;
}

