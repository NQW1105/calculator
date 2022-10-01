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
  return result;
}

let num = "";
let numStorage = [];
let choosenOperator = "";
let calculated = "";

let mainDisplay = document.querySelector('.main-display');
let miniDisplay = document.querySelector('.mini-display');

function addNum(e) {
  num += e.target.innerText;
  mainDisplay.textContent = num;
}
let numButtons = document.querySelectorAll('.num');
numButtons.forEach(button => button.addEventListener('click', addNum));


function selectOperator(e) {
  // console.log(e);
  
  // Button does nothing when there's no number yet
  if (num == "" && calculated == "") {
    return;
  } 

  if (num != "") {
    numStorage.push(parseInt(num));
  }
  

  // console.log(numStorage);
  

  if (calculated == "") {

    if (numStorage.length >= 2) {
      if (choosenOperator == "add") {
        calculated = operate(add, numStorage[numStorage.length - 2], numStorage[numStorage.length - 1]);
      } else if (choosenOperator == "substract") {
        calculated = operate(subtract, numStorage[numStorage.length - 2], numStorage[numStorage.length - 1]);
      } else if (choosenOperator == "multiply") {
        calculated = operate(multiply, numStorage[numStorage.length - 2], numStorage[numStorage.length - 1]);
      } else if (choosenOperator == "divide") {
        calculated = operate(divide, numStorage[numStorage.length - 2], numStorage[numStorage.length - 1]);
      }
      choosenOperator = e.target.classList[1];
      miniDisplay.textContent = `${calculated} ${e.target.textContent}`;
      num = "";
      mainDisplay.textContent = num;
    } else {
      choosenOperator = e.target.classList[1];
      miniDisplay.textContent = `${numStorage[0]} ${e.target.textContent}`;
      num = "";
      mainDisplay.textContent = num;
      return;
    }
  } else {
    
    if (num != "") {
      if (choosenOperator == "add") {
        calculated = operate(add, calculated, numStorage[numStorage.length - 1]);
      } else if (choosenOperator == "substract") {
        calculated = operate(subtract, calculated, numStorage[numStorage.length - 1]);
      } else if (choosenOperator == "multiply") {
        calculated = operate(multiply, calculated, numStorage[numStorage.length - 1]);
      } else if (choosenOperator == "divide") {
        calculated = operate(divide, calculated, numStorage[numStorage.length - 1]);
      }
      num = "";
      choosenOperator = "";
      mainDisplay.textContent = num;
    }
    choosenOperator = e.target.classList[1];
    miniDisplay.textContent = `${calculated} ${e.target.textContent}`;
  }

  // console.log(calculated);
}
let operatorButtons = document.querySelectorAll('.ops');
operatorButtons.forEach(button => button.addEventListener('click', selectOperator));


function calculate(e) {
  if (num == "" || choosenOperator == "") {
    return;
  } 

  numStorage.push(parseInt(num));
  if (calculated == "") {
    if (choosenOperator == "add") {
      calculated = operate(add, numStorage[numStorage.length - 2], numStorage[numStorage.length - 1]);
    } else if (choosenOperator == "substract") {
      calculated = operate(subtract, numStorage[numStorage.length - 2], numStorage[numStorage.length - 1]);
    } else if (choosenOperator == "multiply") {
      calculated = operate(multiply, numStorage[numStorage.length - 2], numStorage[numStorage.length - 1]);
    } else if (choosenOperator == "divide") {
      calculated = operate(divide, numStorage[numStorage.length - 2], numStorage[numStorage.length - 1]);
    }
    miniDisplay.textContent = `${calculated}`;
    num = "";
    choosenOperator = "";
    mainDisplay.textContent = num;
  } else {
    if (choosenOperator == "add") {
      calculated = operate(add, calculated, numStorage[numStorage.length - 1]);
    } else if (choosenOperator == "substract") {
      calculated = operate(subtract, calculated, numStorage[numStorage.length - 1]);
    } else if (choosenOperator == "multiply") {
      calculated = operate(multiply, calculated, numStorage[numStorage.length - 1]);
    } else if (choosenOperator == "divide") {
      calculated = operate(divide, calculated, numStorage[numStorage.length - 1]);
    }
    num = "";
    choosenOperator = "";
    mainDisplay.textContent = num;
    miniDisplay.textContent = `${calculated}`;
  }
}
let equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', calculate);

function clearAll() {
  numStorage = [];
  num = "";
  calculated = "";
  choosenOperator = '';
  miniDisplay.textContent = "";
  mainDisplay.textContent = `${num}`;
}
let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearAll);

function deleteNum() {
  num = num.slice(0, -1);
  mainDisplay.textContent = `${num}`;
}
let delButton = document.querySelector('.del');
delButton.addEventListener('click', deleteNum);

// Floating point numbers (3/4 decimal points)
// Show "error" when num divided by 0
// Keyboard support??? Leave this last...
