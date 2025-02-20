let currentNumber = "";
let previousNumber = "";
let operator = "";

function appendNumber(number) {
  currentNumber += number;
  updateScreen(currentNumber);
}

function updateScreen(value) {
  document.getElementById("screen").value = value;
}

function clearScreen() {
  currentNumber = "";
  previousNumber = "";
  operator = "";
  updateScreen("0");
}

function calculate() {
  if (operator === "" || currentNumber === "") return;
  const result = operate(
    parseFloat(previousNumber),
    parseFloat(currentNumber),
    operator
  );
  updateScreen(result);
  previousNumber = result;
  currentNumber = "";
  operator = "";
}

function setOperator(op) {
  if (currentNumber !== "") {
    operator = op;
    previousNumber = currentNumber;
    currentNumber = "";
    return;
  }
  operator = op;
}

function operate(num1, num2, opr) {
  switch (opr) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    default:
      return 0;
  }
}
