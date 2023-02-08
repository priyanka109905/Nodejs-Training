// map method to map each elemets in anarray
const numbers=[1,-1,2,3];

const filterd=numbers.filter(n=>n>=0);
const items=filterd.map(n=>'</li>'+ n+ '</li>');
console.log(items);