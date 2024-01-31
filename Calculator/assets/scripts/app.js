const defaultResult = 0;
userInput.value = 0;
currentResult = defaultResult;
let logEntries = [];
let logEntry = {};

function getUserInput() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  if (isNaN(currentResult)) {
    currentResult = 0;
  }
  outputResult(currentResult, calcDescription);
  console.log(`${currentResult}`);
}

function clear() {
  currentResult = 0;
  userInput.value = 0;
  outputResult(currentResult, '');
  logEntry = {};
  logEntries = [];
}

function writeToLog(operationIdentifier, prevResult, operationNumber, newResult) {
  if (isNaN(prevResult)) {
    prevResult = 0;
  }
  if (isFinite(prevResult)) {
    prevResult = 0;
  }
  if (isNaN(newResult)) {
    newResult = 0;
  }
  logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult + parseInt(enteredNumber);
  createAndWriteOutput('+', initialResult, enteredNumber);
  writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult - parseInt(enteredNumber);
  createAndWriteOutput('-', initialResult, enteredNumber);
  writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult * parseInt(enteredNumber);
  createAndWriteOutput('*', initialResult, enteredNumber);
  writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult = currentResult / parseInt(enteredNumber);
  createAndWriteOutput('/', initialResult, enteredNumber);
  writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
clrBtn.addEventListener('click', clear);
