const buttons = document.getElementsByClassName("buttons");
const resultText = document.getElementById("resultText");
const clearButton = document.getElementById("clear");
const equalsButton = document.getElementById("result");
const ops = document.getElementsByClassName("ops");

let expression = "";
let currentState = "";
let isResult = false;



for (let btn of buttons) {
  btn.addEventListener("click", () => {
    
    const value = btn.innerText;

    if (expression !== "" && isResult === true) {
        expression = "";
        isResult = false;
    }
    if (btn.id === "clear" || btn.id === "result") return;
    currentState = "number";
    expression += value;
    resultText.innerText = expression;
  });
}

for (let op of ops) {
  op.addEventListener("click", () => {
    const valueops = op.innerText;
    if (currentState === "number" && expression !== "") {
      expression += valueops;
      resultText.innerText = expression;
    }
    currentState = "operator";
  });
}

clearButton.addEventListener("click", () => {
    expression = "";
    resultText.innerText = "0";
});

equalsButton.addEventListener("click", () => {
  try {
    if (currentState !== "operator") {
    expression = eval(expression);
    resultText.innerText = expression;
    isResult = true;
    }
  } catch (err) {
    resultText.innerText = "Error";
    expression = "";
  }
});