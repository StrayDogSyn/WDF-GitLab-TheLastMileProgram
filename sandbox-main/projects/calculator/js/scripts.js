let runningTotal = 0;
let buffer = "0";
let previousOperator = null;
const screen = document.querySelector(".screen");

function buttonClick(value) {
  if (isNaN(parseInt(value)) && value !== ".") {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  rerender();
}

function handleNumber(value) {
  if (value === ".") {
    // Don't add decimal if already exists
    if (buffer.includes(".")) {
      return;
    }
  }
  
  if (buffer === "0") {
    buffer = value;
  } else {
    buffer += value;
  }
}

function handleMath(value) {
  if (buffer === "0") {
    // do nothing
    return;
  }

  const floatBuffer = parseFloat(buffer);
  if (runningTotal === 0) {
    runningTotal = floatBuffer;
  } else {
    flushOperation(floatBuffer);
  }

  previousOperator = value;

  buffer = "0";
}

function flushOperation(floatBuffer) {
  if (previousOperator === "+") {
    runningTotal += floatBuffer;
  } else if (previousOperator === "-") {
    runningTotal -= floatBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= floatBuffer;
  } else if (previousOperator === "÷") {
    // Check for division by zero
    if (floatBuffer === 0) {
      screen.classList.add("error-shake");
      setTimeout(() => {
        screen.classList.remove("error-shake");
      }, 500);
      buffer = "ERROR";
      runningTotal = 0;
      previousOperator = null;
      rerender();
      // Reset after showing error
      setTimeout(() => {
        buffer = "0";
        rerender();
      }, 1500);
      return;
    }
    runningTotal /= floatBuffer;
  }
}

function handleSymbol(value) {
  switch (value) {
    case "C":
      buffer = "0";
      runningTotal = 0;
      previousOperator = null;
      break;
    case "=":
      if (previousOperator === null) {
        // need two numbers to do math
        return;
      }
      flushOperation(parseFloat(buffer));
      previousOperator = null;
      buffer = "" + runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "-":
    case "×":
    case "÷":
      handleMath(value);
      break;
  }
}

function rerender() {
  screen.innerText = buffer;
}

function init() {
  document
    .querySelector(".calc-buttons")
    .addEventListener("click", function(event) {
      buttonClick(event.target.innerText);
    });
}

init();