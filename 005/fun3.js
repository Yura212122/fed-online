 let  add  = (a, b) => a+b ;

 let subtract = (a, b) => a - b;

 let multiply = (a, b) => a*b;

 let  divide = (a, b) => {
    if (b === 0) {
        return "Помилка: ділення на нуль!";
    }
    return a / b;
}
let  calculate = (operator, num1, num2) => {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Невірний оператор!";
    }
}
const operator = prompt("Введіть оператор (+, -, *, /):");
const num1 = parseFloat(prompt("Введіть перше число:"));
const num2 = parseFloat(prompt("Введіть друге число:"));

const result = calculate(operator, num1, num2);
alert("Результат: " + result);