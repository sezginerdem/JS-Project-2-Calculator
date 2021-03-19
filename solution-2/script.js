class Calculator {
  constructor(prevOperand, currentOperand) {
    this.prevOperandElement = prevOperand;
    this.currentOperandElement = currentOperand;
    this.clear();
  }

  clear() {
    this.currentOperandElement.innerText = "";
    this.prevOperandElement.innerText = "";
  }

  delete() {
    this.currentOperandElement.innerText = this.currentOperandElement.innerText.slice(
      0,
      -1
    );
  }

  appendNumber(number) {
    if ((this.currentOperandElement.innerText.length + 1) % 4 == 0) {
      this.currentOperandElement.innerText += "," + number.innerText;
    } else {
      this.currentOperandElement.innerText += number.innerText;
    }
  }

  chooseOperation() {}

  compute() {
    let current = this.currentOperandElement.innerText.replace(",", "");
    let previous = this.prevOperandElement.innerText.replace(",", "");

    console.log(current);
    console.log(previous);

    switch (previous.charAt(previous.length - 1)) {
      case "+":
        this.currentOperandElement.innerText =
          parseFloat(previous.slice(0, -1)) + parseFloat(current);
        break;

      case "-":
        this.currentOperandElement.innerText =
          parseFloat(previous.slice(0, -1)) - parseFloat(current);
        break;

      case "*":
        this.currentOperandElement.innerText =
          parseFloat(previous.slice(0, -1)) * parseFloat(current);
        break;

      case "÷":
        this.currentOperandElement.innerText =
          parseFloat(previous.slice(0, -1)) / parseFloat(current);
        break;
    }
  }

  getDisplayNumber() {}

  updateDisplay() {
    this.prevOperandElement.innerText = this.currentOperandElement.innerText;
    this.currentOperandElement.innerText = "";
  }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const equalsButton = document.querySelector("[data-equals]");
const deleteButton = document.querySelector("[data-delete]");
const allClearButton = document.querySelector("[data-all-clear]");

const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

const calculator = new Calculator(
  previousOperandTextElement,
  currentOperandTextElement
);

numberButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    calculator.appendNumber(btn);
  });
});

operationButtons.forEach((btn) => {
  btn.addEventListener("click", function () {
    calculator.appendNumber(btn);
    calculator.updateDisplay();
  });
});

allClearButton.addEventListener("click", function () {
  calculator.clear();
});

deleteButton.addEventListener("click", function () {
  calculator.delete();
});

equalsButton.addEventListener("click", function () {
  calculator.compute();
  calculator.prevOperandElement.innerText = "";
});
