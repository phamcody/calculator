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
let displayValue = "";

let screen = document.querySelector("#calculation");
let inputs = document.querySelectorAll(".input");
inputs.forEach((input) => {
    input.addEventListener('click', function(e) {
        if (e.target.textContent === "0" && displayValue === ""
         || displayValue.length > 6
         || e.target.textContent === "." && displayValue.includes(".")) {
            return;
        }
        else if (displayValue === "" && e.target.textContent === ".") {
            displayValue += 0 + e.target.textContent;
            screen.textContent = displayValue;
        }
        else {
            displayValue += e.target.textContent;
            screen.textContent = displayValue;
        }
    })
})
