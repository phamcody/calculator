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

function clear() {
    displayValue = "0";
    screen.textContent = displayValue;
}

function convertSigns(displayNum) {
    displayValue = (displayNum *-1).toString();
    screen.textContent = displayValue;
}

function convertToPercentage(displayNum) {
    displayValue = (displayNum/100).toString();
    if (displayValue.length > 7) {
        displayValue = Number(displayValue).toExponential(1).toString();
        screen.textContent = displayValue;
    }
    else {
        screen.textContent = displayValue;
    }
}

let initialValue = 0;
let operator = "";
let secondaryValue = 0;
let displayValue = "0";

let screen = document.querySelector("#calculation");
let inputs = document.querySelectorAll(".input");



inputs.forEach((input) => {
    input.addEventListener('click', function(e) {
        if (e.target.textContent === "0" && displayValue === "0"
         || displayValue.length > 6
         || e.target.textContent === "." && displayValue.includes(".")) {
            return;
        }
        else if (displayValue === "0" && e.target.className.includes("number")) {
            displayValue = "";
            displayValue += e.target.textContent;
            screen.textContent = displayValue;
        }
        else {
            displayValue += e.target.textContent;
            screen.textContent = displayValue;
        }
    });
})

let miscs = document.querySelectorAll(".misc");

miscs.forEach((misc) => {
    misc.addEventListener('click', function(e) {
        if (e.target.textContent === "AC") clear();
        else if (e.target.textContent === "+/-") convertSigns(displayValue);
        else if (e.target.textContent === "%") convertToPercentage(displayValue);
    })
})
