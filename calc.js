console.log("66".toString(16))
console.log("76".toString(16))
console.log("88".toString(16))



function operate(operator, a , b) {
    if (operator == 'add') return add(a, b);
    if (operator == 'subtract') return subtract(a, b);
    if (operator == 'multiply') return multiply(a, b);
    if (operator == 'divide') return divide(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) return "divide by 0 impossible :D"
    return a / b;
}