//DEFINE DISPLAY AND EVALUATION SCREEN
const answerDisplay = document.querySelector('.answer')
const expressionDisplay = document.querySelector('.expression')

//DEFINE CURRENT VALUE, PREVIOUS VALUE, EXPRESSION BEING EVALUATED
let currValue = ""
let prevValue = ""
let expression = []

//DEFINE VALUE FUNCTION
function value(num) {
    //SHOW IN EXPRESSION DISPLAY
    expressionDisplay.textContent += `${num}`
    //ADD TO CURRENT VALUE STRING
    currValue += `${num}`
}

//DEFINE NUMBERS
const one = document.querySelector('.one')
const two = document.querySelector('.two')
const three = document.querySelector('.three')
const four = document.querySelector('.four')
const five = document.querySelector('.five')
const six = document.querySelector('.six')
const seven = document.querySelector('.seven')
const eight = document.querySelector('.eight')
const nine = document.querySelector('.nine')
const zero = document.querySelector('.zero')

//ADD EVENT LISTENERS TO NUMBERS
one.addEventListener('click', () => { value(1) })
two.addEventListener('click', () => { value(2) })
three.addEventListener('click', () => { value(3) })
four.addEventListener('click', () => { value(4) })
five.addEventListener('click', () => { value(5) })
six.addEventListener('click', () => { value(6) })
seven.addEventListener('click', () => { value(7) })
eight.addEventListener('click', () => { value(8) })
nine.addEventListener('click', () => { value(9) })
zero.addEventListener('click', () => { value(0) })

//DEFINE OPERATORS
const addButton = document.querySelector('.add')
const subButton = document.querySelector('.sub')
const mulButton = document.querySelector('.mul')
const divideButton = document.querySelector('.divide')

function operator(type) {
    //REPLACE CURR AND PREVIOUS VALUES
    prevValue = currValue
    currValue = ""
    //PUSH PREVIOUS VALUE TO CURRENT EXPRESSION ARRAY
    expression.push(`${prevValue}`)
    //PUSH OPERATOR TYPE TO CURRENT EXPRESSION ARRAY
    expression.push(type)
}

//ADD EVENT LISTENERS TO OPERATORS
addButton.addEventListener('click', () => {
    operator("+")
    expressionDisplay.textContent += " + "
})

subButton.addEventListener('click', () => {
    operator(sub)
    expressionDisplay.textContent += " - "
})

mulButton.addEventListener('click', () => {
    operator(mul)
    expressionDisplay.textContent += " * "
})

divideButton.addEventListener('click', () => {
    operator(div)
    expressionDisplay.textContent += " / "
})

//DEFINE EQUAL BUTTON
const equalButton = document.querySelector('.equal')
equalButton.addEventListener('click', () => {
    expression.push(`${currValue}`)
    let expressionLength = expression.length
    while (expressionLength > 1) {
        evaluate(expression)
        expressionLength -= 2
    }

    //FOR CHECKING
    console.log(expression)
    //GET FIRST VALUE IN ARRAY ( SHOULD BE ONLY VALUE)
    const finalAnswer = expression[0]
    //DISPLAY FIRST VALUE IN ARRAY
    answerDisplay.textContent += `${finalAnswer}`

})

//EVALUATE FUNCTIONS TO BE PUT INTO EQUAL BUTTON
function add(a, b) {
    a = Number(a)
    b = Number(b)
    return a + b
}

function subtract(a, b) {
    a = Number(a)
    b = Number(b)
    return a - b
}

function multiply(a, b) {
    a = Number(a)
    b = Number(b)
    return a * b
}

function divide(a, b) {
    a = Number(a)
    b = Number(b)
    return a / b
}

function operate(a, b, operator) {
    return operator(a, b)
}

function evaluate(expression) {
    for (const term of expression) {
        if (term == "+") {
            //TAKE TERMS BEFORE AND AFTER ADD
            let addIndex = expression.indexOf(term)
            let answer
            answer = operate(expression[addIndex - 1], expression[addIndex + 1], add)
            expression[addIndex] = `${answer}`
            expression.splice(addIndex + 1, 1)
            expression.splice(addIndex - 1, 1)
        }
    }
}