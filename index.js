/// To get puttons input and screem to output the result

const buttons = document.querySelectorAll("button");
const screen = document.querySelector("#screen");


//// To get the specific data type / number and operators

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {

/// using include method to  get the specify operator and divide num1 and num2 numbers

    const value = e.target.innerText;
    if (value === "=") {
      if (screen.innerText.includes("/")) {
        const splitStuff = screen.innerText.split("/");
        operate("/", splitStuff[0], splitStuff[1]);
      }
      if (screen.innerText.includes("+")) {
        const splitStuff = screen.innerText.split("+");
        operate("+", splitStuff[0], splitStuff[1]);
      }
      if (screen.innerText.includes("-")) {
        const splitStuff = screen.innerText.split("-");
        operate("-", splitStuff[0], splitStuff[1]);
      }
      if (screen.innerText.includes("*")) {
        const splitStuff = screen.innerText.split("*");
        operate("*", splitStuff[0], splitStuff[1]);
      }
    }
    //// clear the screen by resetting the inner text
    if (value === "Clear") {
      screen.innerText = "";
    } else{
      screen.innerText += value;

    } 
    /// get rid of equal sign at the end of very operation
    screen.innerText = screen.innerText.replace("=", " ");
  });
});

//// display result for very case.

const operate = function (operator, value1, value2) {
  const numb1 = Number(value1);
  const numb2 = Number(value2);
  if (operator === "/") {
    screen.innerText = numb1 / numb2;
  }
  if (operator === "*") {
    screen.innerText = numb1 * numb2;
  }
  if (operator === "+") {
    screen.innerText = numb1 + numb2;
  }
  if (operator === "-") {
    screen.innerText = numb1 - numb2;
  }
};
