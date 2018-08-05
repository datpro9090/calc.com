const numberZeroButton = document.querySelector('.zero')
const numberOneButton = document.querySelector('.one')
const numberTwoButton = document.querySelector('.two')
const numberThreeButton = document.querySelector('.three')
const numberFourButton = document.querySelector('.four')
const numberFiveButton = document.querySelector('.five')
const numberSixButton = document.querySelector('.six')
const numberSevenButton = document.querySelector('.seven')
const numberEightButton = document.querySelector('.eight')
const numberNineButton = document.querySelector('.nine')
const addButton = document.querySelector('.add')
const subtractButton = document.querySelector('.subtract')
const multiplyButton = document.querySelector('.multiply')
const divideButton = document.querySelector('.divide')
const calculateButton = document.querySelector('.calculate')
const clearButton = document.querySelector('.clear')
const screen = document.querySelector('.screen')
const audio = document.querySelector('.audio')

const ADD = 'add'
const SUBTRACT = 'subtract'
const MULTIPLY = 'multiply'
const DIVIDE = 'divide'

let result = 0
let input = 0
let operator = null
let shouldResetInput = false

const allButtons = [...document.querySelectorAll('button')]
allButtons.forEach(button => {
  button.addEventListener('click', () => {
    audio.currentTime = 0
    audio.play()
  })
})

const appendDigit = digit => {
  if (shouldResetInput) {
    resetInput()
    shouldResetInput = false
  }
  screen.textContent += digit
  input = input * 10 + digit
}

const resetInput = () => {
  screen.textContent = ''
  input = 0
}

const clear = () => {
  screen.textContent = ''
  result = 0
  input = 0
  operator = null
  shouldResetInput = false
}

const setOperator = newOperator => {
  operator = newOperator
  result = input
  shouldResetInput = true
}

const calculate = () => {
  switch (operator) {
    case ADD:
      result = result + input
      break
    case SUBTRACT:
      result = result - input
      break
    case MULTIPLY:
      result = result * input
      break
    case DIVIDE:
      result = result / input
      break
  }
  screen.textContent = result
  input = result
  shouldResetInput = true
}

numberZeroButton.addEventListener('click', () => appendDigit(0))
numberOneButton.addEventListener('click', () => appendDigit(1))
numberTwoButton.addEventListener('click', () => appendDigit(2))
numberThreeButton.addEventListener('click', () => appendDigit(3))
numberFourButton.addEventListener('click', () => appendDigit(4))
numberFiveButton.addEventListener('click', () => appendDigit(5))
numberSixButton.addEventListener('click', () => appendDigit(6))
numberSevenButton.addEventListener('click', () => appendDigit(7))
numberEightButton.addEventListener('click', () => appendDigit(8))
numberNineButton.addEventListener('click', () => appendDigit(9))
addButton.addEventListener('click', () => setOperator(ADD))
subtractButton.addEventListener('click', () => setOperator(SUBTRACT))
multiplyButton.addEventListener('click', () => setOperator(MULTIPLY))
divideButton.addEventListener('click', () => setOperator(DIVIDE))
clearButton.addEventListener('click', () => clear())
calculateButton.addEventListener('click', () => calculate())
