 
 

 
import { add, subtract, multiply, divide } from "./import.js";

 
const a = 10;
const b = 5;

console.log(`Addition of ${a} and ${b}:`, add(a, b));
console.log(`Subtraction of ${a} and ${b}:`, subtract(a, b));
console.log(`Multiplication of ${a} and ${b}:`, multiply(a, b));
try {
    console.log(`Division of ${a} and ${b}:`, divide(a, b));
} catch (error) {
    console.error(error.message);
}
