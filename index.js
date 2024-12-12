const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "0";
let operator = null;
let previousInput = null;

function updateDisplay() {
  display.textContent = currentInput;
}

function handleNumber(number) {
  if (currentInput === "0") {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function handleOperator(op) {
  if (previousInput === null) {
    previousInput = currentInput;
  } else if (operator) {
    previousInput = calculate();
  }
  operator = op;
  currentInput = "0";
}

function calculate() {
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);
  if (isNaN(prev) || isNaN(curr)) return "0";

  let result;
  switch (operator) {
    case "+":
      result = prev + curr;
      break;
    case "÷":
      result = curr !== 0 ? prev / curr : "Error";
      break;
    default:
      result = curr;
  }

  return result.toString();
}

function clearDisplay() {
  currentInput = "0";
  previousInput = null;
  operator = null;
  updateDisplay();
}
