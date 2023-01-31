let op1 = "";
let op2 = "";
let ope = "";

function buttonPressed(buttonValue){
    let calcDiv = document.querySelector("#calc");
    if (calcDiv.textContent == "divide by 0 impossible :D") {
        calcDiv.textContent = "";
        op1 = "";
        op2 = "";
        ope = "";
    }
    if (buttonValue == 'ON') {
        calcDiv.textContent = "";
        op1 = "";
        op2 = "";
        ope = "";
    } else if (buttonValue == 'DEL') {
        if (ope != "" && op2 != "") { 
            let op2delete = op2.split('');
            op2delete.pop()
            op2 = op2delete.join('');
        } else if (ope != "" && op2 == "") {
            ope = ""
        } else {
            let op1delete = op1.split('');
            op1delete.pop()
            op1 = op1delete.join('');
        }
    } else if (buttonValue == '+' || buttonValue == '-' || buttonValue == 'x' || buttonValue == '/' || buttonValue == "ENTER") {
        if (ope == "") {
            if(buttonValue != "ENTER") {
                ope = buttonValue;
            }
        }
        else {
            op1 = Math.round(operate(ope, op1, op2)*1000)/1000;
            op2 = "";
            ope = "";
        }
    } else {
        
        if (ope == "") op1 += buttonValue;
        else op2 +=buttonValue
    }
    calcDiv.textContent = op1 + ope + op2;
}

function operate(operator, a , b) {
    if (operator == '+') return add(a, b);
    if (operator == '-') return subtract(a, b);
    if (operator == 'x') return multiply(a, b);
    if (operator == '/') return divide(a, b);
}

function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) return "divide by 0 impossible :p"
    return a / b;
}