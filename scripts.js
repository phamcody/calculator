function add(currentNumber, newNumber) {
    return console.log(currentNumber+newNumber);
}

function subtract(currentNumber, newNumber) {
    return currentNumber-newNumber;
}

function multiply(currentNumber, newNumber) {
    return currentNumber*newNumber;
}

function divide(currentNumber, newNumber) {
    return console.log(currentNumber/newNumber);
}

function operate(currentNumber, newNumber, operator) {
    if (operator === "+") {
        add(currentNumber, newNumber);
    }
    else if (operator === "-") {
        subtract(currentNumber, newNumber);
    }
    else if (operator === "x") {
        multiply(currentNumber, newNumber);
    }
    else if (operator === "÷") {
        divide(currentNumber, newNumber);
    }
}

let initialValue = 0;
let operator = "";
let secondaryValue = 0;
let displayValue = 0;

