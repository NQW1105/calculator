function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

function operate(operator, num1, num2) {
  let result = operator(num1, num2);
  // console.log(result);
  return result;
}

let num = "";
let numStorage = [];
let choosenOperator = "";

let mainDisplay = document.querySelector('.main-display');
let miniDisplay = document.querySelector('.mini-display');

function addNum(e) {
  num += e.target.innerText;
  mainDisplay.textContent = num;
}
let numButtons = document.querySelectorAll('.num');
numButtons.forEach(button => button.addEventListener('click', addNum));


function selectOperator(e) {
  choosenOperator = e.target.innerText;
  if (num == "") {
    return;
  }
  numStorage.push(num);
  miniDisplay.textContent = `${num} ${choosenOperator}`;
  num = "";
}
let operatorButtons = document.querySelectorAll('.ops');
operatorButtons.forEach(button => button.addEventListener('click', selectOperator));

// let equalButton = document.querySelector('.equal');
// equalButton.addEventListener('click', operate);

