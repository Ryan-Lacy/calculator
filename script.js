const add = (a,b) => a + b;
const subtract = (a,b) => a - b;
const multiply = (a,b) => a * b;
const divide = (a,b) => a / b;

function operate (operator, number1, number2) {
    switch(operator) {
        case "+":
            add(number1,number2);
            break;
        case "-":
            subtract(number1,number2);
            break;
        case "*":
            multiply(number1,number2);
            break;
        case "/":
            divide(number1,number2);
            break;
        default:
            break;
    }
}