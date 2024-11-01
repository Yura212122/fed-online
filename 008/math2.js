 // вивести найбільше число

console.log(Math.max(10, 200, 12, 46, 123));
console.log(Math.min(13, 1, 32, 67, 123, -2, -34));

// піднести до степеня

 console.log(`Math.pow = ${Math.pow(9,2)}`);

 // щкруглення числа

 console.log(`округлення в низ = ${Math.floor(3.4)}`);
 console.log(`округлення в гору = ${Math.ceil(3.4)}`);

 // Date

 const age = prompt(`write your age` ) 
const year = new Date().getFullYear();
const answer = year -  age;
console.log(`your year = ${answer}`);

// час

const time = new Date().toLocaleString();
console.log(time);

// імена

let name = `Bob,John,Yura,Samm,Sofi`;
let nameArr = name.split(`,`);
console.log(nameArr)