// Exercise 1 

function greet(name) {
    console.log(`Hello, my name is ${name}.  Nice to meet you!`)
}

greet("Ivy")

// Exercise 2 - 

function isEven(number) {
    return (number % 2 == 0)
}

isEven(5)
isEven(4)
isEven(-3)
isEven(100.2)

// Exercise 3 -

function mathOperation(num1, num2, op) {
    switch(op) {
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


console.log(mathOperation(1, 2, '+'))
console.log(mathOperation(1, 2, '-'))
console.log(mathOperation(1, 2, '*'))
console.log(mathOperation(1, 2, '/'))
console.log(mathOperation(1, 2, '%'))

// Exercise 4 -
function applyFunction(array, op) {
    result=[]
    array.forEach(function(array) {
        result.push(op(array))
    })
    return result
}

function sq(n) {
    return n*n
}
console.log(applyFunction([1,2,3,4], sq))