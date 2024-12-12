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
