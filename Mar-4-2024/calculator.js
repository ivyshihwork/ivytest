function calculator(num1, num2, sign){
    // evalWithVariables("a>5", {"a":7});
    switch(sign) {
        case '+':
            return num1 + num2;
            break;
        case '-':
            return num1-num2;
            break;
        case '*': 
            return num1*num2;
            break;
        case '/':
            return num1/num2;
            break;
        default:
            console.log("Illegal operation.  Only + - * / are supported.  Please try again.")
            break;
        
    }
}

console.log(calculator(1, 2, '+'))
console.log(calculator(1, 2, '-'))
console.log(calculator(1, 2, '*'))
console.log(calculator(1, 2, '/'))
console.log(calculator(1, 2, '%'))