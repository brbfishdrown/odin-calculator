
//ADDS TO EXPRESSION BEING CURRENTLY EVALUATED
//CLICK EQUALS COMPUTES THE RESULT

//IF EXPRESSION HAS ANY FLAWS (INCORRECT USE OF SYMBOL, DECIMAL, BRACKET)
//PUT SYNTAX ERROR

//IF DIVIDE BY 0
//PUT MATH ERROR

//STORE VALUE INTO MEMORY
let expression = [];
let memory = "";


//DEFINE FUNCTIONS
const clear = document.querySelector('.ac') //DELETES THE WHOLE EXPRESSION AND CLEARS CALCULATOR //CLEAR EXPRESSION, MEMORY
const del = document.querySelector('.del') //DELETE THE LAST INPUT VALUE, REMOVES FROM ARRAY
const equal = document.querySelector('.equal') //CONVERT ARRAY INTO STRING AND EVALUATE 

//DEFINE OPERATORS
const add = document.querySelector('.add')
const sub = document.querySelector('.sub')
const divide = document.querySelector('.divide')
const mul = document.querySelector('.mul')

const operators = [{ name: "add", operation: "+" }, { name: "sub", operation: "-" }, { name: "divide", operation: "/" }, { name: "mul", operation: "*" }]

//DEFINE OTHER
const decimal = document.querySelector('.decimal')
const percentage = document.querySelector('.percent')
const negative = document.querySelector('.negative')

const other = [{ name: "decimal", operation: "%" }, { name: "percent", operation: "%" }, { name: "negative", operation: "-" }]


//DEFINE VALUES
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

const values = [{ name: "one", value: 1 }, { name: "two", value: 2 }, { name: "three", value: 3 }, { name: "four", value: 4 }, { name: "five", value: 5 }, { name: "six", value: 6 },
{ name: "seven", value: 7 }, { name: "eight", value: 8 }, { name: "nine", value: 9 }, { name: "zero", value: 0 },]


//DEFINE ANSWER AND OPERATION DISPLAY
const answer = document.querySelector('.answer')
const operation = document.querySelector('.operation')


//EVENT LISTENERS FOR VALUES
one.addEventListener('click', () => {
    operation.textContent += "1"
    expression.push("1")
})

two.addEventListener('click', () => {
    operation.textContent += "2"
    expression.push("3")
})

three.addEventListener('click', () => {
    operation.textContent += "3"
    expression.push("3")
})

four.addEventListener('click', () => {
    operation.textContent += "4"
    expression.push("4")
})

five.addEventListener('click', () => {
    operation.textContent += "5"
    expression.push("5")
})

six.addEventListener('click', () => {
    operation.textContent += "6"
    expression.push("6")
})

seven.addEventListener('click', () => {
    operation.textContent += "7"
    expression.push("7")
})

eight.addEventListener('click', () => {
    operation.textContent += "8"
    expression.push("8")
})

nine.addEventListener('click', () => {
    operation.textContent += "9"
    expression.push("9")
})

zero.addEventListener('click', () => {
    operation.textContent += "0"
    expression.push("0")
})


//CLEAR BUTTON
clear.addEventListener('click', () => {
    operation.textContent = ""
    expression = [];
})

//EVENT LISTENERS FOR OPERATIONS
add.addEventListener('click', () => {
    operation.textContent += "  +  "
    expression.push("+")
})

sub.addEventListener('click', () => {
    operation.textContent += "  -  "
    expression.push("-")
})

divide.addEventListener('click', () => {
    operation.textContent += "  /  "
    expression.push("/")
})

mul.addEventListener('click', () => {
    operation.textContent += "  *  "
    expression.push("*")
})

//EVENT LISTENERS FOR OTHER
decimal.addEventListener('click', () => {
    operation.textContent += "."
    expression.push(".")
})

negative.addEventListener('click', () => {
    operation.textContent += "-"
    expression.push("-")
})

percentage.addEventListener('click', () => {
    operation.textContent += "%"
    expression.push("%")
})
<<<<<<< HEAD
=======

del.addEventListener('click', () => {
    let removeLast = operation.textContent.replace(/.$/,'');;
    operation.textContent = `${removeLast}`
    expression.pop()
})
>>>>>>> delete
