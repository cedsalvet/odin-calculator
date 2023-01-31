let op1 = "";
let op2 = "";
let ope = "";

function buttonPressed(buttonValue){
    let calcDiv = document.querySelector("#calc");
    if (calcDiv.textContent == "divide by 0 impossible :p") {
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
            try{
                let op1delete = op1.split('');
                op1delete.pop()
                op1 = op1delete.join('');
            } catch {
                op1 = "";
            }
        }
    } else if (buttonValue == '+' || buttonValue == '-' || buttonValue == 'x' || buttonValue == '/' || buttonValue == "ENTER") {
        if (op1 != "" && op2 != "" && ope != "") {
            result = operate(ope, op1, op2)
            op1 =  result != "divide by 0 impossible :p" ? Math.round(result*1000)/1000 : result;
            op2 = "";
            if (buttonValue != "ENTER") ope = buttonValue;
            else ope = "";
        } else if (op1 != "" && buttonValue != "ENTER") {
            ope = buttonValue;
        }
    } else {
        if (ope == "") {
            if (buttonValue == "." && !op1.includes(".") || buttonValue != ".") op1 += buttonValue;
        }
        else if (buttonValue == "." && !op2.includes(".") || buttonValue != ".") op2 +=buttonValue
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
    return parseFloat(a) + parseFloat(b);
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