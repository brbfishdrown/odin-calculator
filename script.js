//DEFINE DISPLAY AND EVALUATION SCREEN
const answerDisplay = document.querySelector('.answer')
const expressionDisplay = document.querySelector('.expression')

//DEFINE CURRENT VALUE, PREVIOUS VALUE, EXPRESSION BEING EVALUATED
let currValue = ""
let prevValue = ""
let expression = []


function value(num) {
    //SHOW IN EXPRESSION DISPLAY
    expressionDisplay.textContent += `${num}`
    //ADD TO CURRENT VALUE STRING
    currValue += `${num}`
}
