function add(currentNumber, newNumber) {
    displayValue = currentNumber + newNumber;
    screen.textContent = displayValue.toString();
    // initial = DisplayValue
    // displayValue = 0
}

function subtract(currentNumber, newNumber) {
    displayValue = currentNumber - newNumber;
    screen.textContent = displayValue.toString();
}

function multiply(currentNumber, newNumber) {
    displayValue = currentNumber * newNumber;
    screen.textContent = displayValue.toString();
}

function divide(currentNumber, newNumber) {
    displayValue = currentNumber / newNumber;
    screen.textContent = displayValue.toString();
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
    initialValue = 0;
    secondaryValue = 0;
    switchVariables = false;
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
let temp = 0;

let screen = document.querySelector("#calculation");
let inputs = document.querySelectorAll(".input");

let switchVariables = false;


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

let operators = document.querySelectorAll(".operators");

operators.forEach((operator) => {
    operator.addEventListener('click', function(e) {
        if (e.target.textContent === "+") {
            if (switchVariables === false) {
                initialValue = Number(displayValue);
                op = "+";
                displayValue = "0";
                switchVariables = true;
                console.log("IV: " + initialValue);
                console.log("SV: " + secondaryValue);
                console.log("DV: " + displayValue); 
            }
            else if (switchVariables === true) {
                secondaryValue = Number(displayValue);
                operate(initialValue, secondaryValue, op);
                op = "+";
                initialValue = displayValue;
                displayValue = "0";
                console.log("IV: " + initialValue);
                console.log("SV: " + secondaryValue);
                console.log("DV: " + displayValue); 

            }
        }


        else if (e.target.textContent === "-") {
            if (switchVariables === false) {
                initialValue = Number(displayValue);
                op = "-";
                displayValue = "0";
                switchVariables = true;
            }
            else if (switchVariables === true) {
                secondaryValue = Number(displayValue);
                operate(initialValue, secondaryValue, op);
                op = "-";
                initialValue = displayValue;
                displayValue = "0";
                console.log("IV: " + initialValue);
                console.log("SV: " + secondaryValue);
                console.log("DV: " + displayValue); 

            }
        }


        else if (e.target.textContent === "÷") {
            if (switchVariables === false) {
                initialValue = Number(displayValue);
                op = "÷";
                displayValue = "0";
                switchVariables = true;
            }
            else if (switchVariables === true) {
                secondaryValue = Number(displayValue);
                if (secondaryValue === 0) secondaryValue = 1;
                operate(initialValue, secondaryValue, op);
                op = "÷";
                initialValue = displayValue;
                displayValue = "0";
                console.log("IV: " + initialValue);
                console.log("SV: " + secondaryValue);
                console.log("DV: " + displayValue); 

            }
        }


        else if (e.target.textContent === "x") {
            if (switchVariables === false) {
                initialValue = Number(displayValue);
                op = "x";
                displayValue = "0";
                switchVariables = true;
            }
            else if (switchVariables === true) {
                secondaryValue = Number(displayValue);
                if (secondaryValue === 0) secondaryValue = 1;
                operate(initialValue, secondaryValue, op);
                op = "x";
                initialValue = displayValue;
                displayValue = "0";
                console.log("IV: " + initialValue);
                console.log("SV: " + secondaryValue);
                console.log("DV: " + displayValue); 

            }
        }


        else if (e.target.textContent === "=") {
            secondaryValue = Number(displayValue);
            operate(initialValue, secondaryValue, op);
            initialValue = displayValue;
            displayValue = "0";
            console.log("IV: " + initialValue);
            console.log("SV: " + secondaryValue);
            console.log("DV: " + displayValue);
        }
    })
})
