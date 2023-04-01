let result = document.getElementById("result");
let num1 = 0;
let operator = "";

function updateResult(number) {
  result.value += number;
}

function clearResult() {
  result.value = "";
  num1 = 0;
  operator = "";
}

function calculate(op) {
  if (op === "+") {
    num1 = parseFloat(result.value);
    operator = "+";
    result.value = "";
  } else if (op === "-") {
    num1 = parseFloat(result.value);
    operator = "-";
    result.value = "";
  } else if (op === "*") {
    num1 = parseFloat(result.value);
    operator = "*";
    result.value = "";
  } else if (op === "/") {
    num1 = parseFloat(result.value);
    operator = "/";
    result.value = "";
  } else if (op === "%") {
    num1 = parseFloat(result.value);
    operator = "%";
    result.value = "";
  } else if (op === "=") {
    let num2 = parseFloat(result.value);
    if (operator === "+") {
      result.value = num1 + num2;
    } else if (operator === "-") {
      result.value = num1 - num2;
    } else if (operator === "*") {
      result.value = num1 * num2;
    } else if (operator === "/") {
      result.value = num1 / num2;
    } else if (operator === "%") {
      result.value = num1 % num2;
    }
    operator = "";
  }
}
