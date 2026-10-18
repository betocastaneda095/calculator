const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
	return array.reduce((total,current)=> total+current,0);
};

const multiply = function(a,b) {
  return a * b;
};

const power = function(a,b) {
  return a ** b;
};

const divide = function(a,b) {
    return a / b;
}

const factorial = function(a) {
  let resp = 1;
  for (let i = a; i > 0; i--) {
    resp *= i;
  }
  return resp;
};


//map of operators with a key values from object

const operations = {
   "+": function(firstNumber,secondNumber) {
        return add(firstNumber,secondNumber);
   }, 

   "-": function(firstNumber,secondNumber) {
        return subtract(firstNumber,secondNumber);
   },

   "*": function(firstNumber,secondNumber){
        return multiply(firstNumber,secondNumber);
   },

   "/": function(firstNumber,secondNumber){
        return divide(firstNumber,secondNumber);
   }
};


// Operative section 

const input = document.querySelector("#display");
const buttonsContainer = document.querySelector(".keyboard");

let firstNumber = null;
let selectedOperator = null;

buttonsContainer.addEventListener("click", function (event) {
  const clickedElement = event.target;

  if (clickedElement.tagName !== "BUTTON") {
    return;
  }

  let clickedValue = clickedElement.getAttribute("data-value");

  if (clickedValue === null) {
    clickedValue = clickedElement.textContent.trim();
  }

  if (!clickedElement.classList.contains("operator")) {
    input.value += clickedValue;
    return;
  }

  if (clickedValue === "=") {
    if (firstNumber === null || input.value === "") {
      return;
    }

    const secondNumber = Number(input.value);
    const operationFunction = operations[selectedOperator];

    if (operationFunction === undefined) {
      return;
    }

    const calculationResult = operationFunction(firstNumber, secondNumber);
    input.value = calculationResult;

    firstNumber = null;
    selectedOperator = null;
    return;
  }

  if (input.value === "" || operations[clickedValue] === undefined) {
    return;
  }

  firstNumber = Number(input.value);
  selectedOperator = clickedValue;
  input.value = "";
});
