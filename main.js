let calculation = "";

const result = document.getElementById("result");

function addNumber(number) {
  calculation += number;

  result.textContent = calculation;
}

function addOperator(operator) {
  calculation += operator;

  result.textContent = calculation;
}

function calculate() {
  try {
    calculation = eval(calculation).toString();

    result.textContent = calculation;
  } catch {
    result.textContent = "Error";

    calculation = "";
  }
}

function clearCalculator() {
  calculation = "";

  result.textContent = "0";
}

function deleteNumber() {
  calculation = calculation.slice(0, -1);

  result.textContent = calculation || "0";
}

function calculatePercent() {
  try {
    calculation = (eval(calculation) / 100).toString();

    result.textContent = calculation;
  } catch {
    result.textContent = "Error";
  }
}
