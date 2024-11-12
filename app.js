const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
let currentInput = "";
let operator = "";
let firstOperand = null;

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // console.log(event.target.innerText); // access the inner text of the html text
    // Future logic to capture the button's value would go here...
    const value = event.target.innerText;
    if (value >= '0' && value <= '9') {
      currentInput += value;
      display.textContent = currentInput;
    } else if (value === '+' || value === '-' || value === '*' || value === '/') {
      if (firstOperand === null) {
        firstOperand = parseFloat(currentInput);
      } else if (operator) {
        const secondOperand = parseFloat(currentInput);
        switch (operator) {
          case '+':
            firstOperand += secondOperand;
            break;
          case '-':
            firstOperand -=secondOperand;
            break;
          case '*':
            firstOperand *= secondOperand;
            break;
          case '/':
            firstOperand /= secondOperand;
            break;
        }
      }
      operator = value;
      currentInput = '';
    } else if (value === '=') {
      if (firstOperand !== null && operator !== '' && currentInput !== '') {
        const secondOperand = parseFloat(currentInput);
        let result; 
        switch (operator) {
          case '+':
            result = firstOperand + secondOperand;
            break;
          case '-':
            result = firstOperand - secondOperand;
            break;
          case '*':
            result = firstOperand * secondOperand;
            break;
          case '/':
            result = firstOperand / secondOperand;
            break;
        }
        display.textContent = result; // Display the result
        currentInput = result.toString(); // Keep result for further calculations
        firstOperand = null; // Reset first operand for next operation
        operator = ''; // Reset operator
      }
    }

    // Handle clear button (C)
    else if (value === 'C') {
      currentInput = '';
      firstOperand = null;
      operator = '';
      display.textContent = '0'; // Reset the display to 0
    }
  });
});

// calculator.addEventListener('click', (event) => {
//   // This log is for testing purposes to verify we're getting the correct value
//   // You have to click a button to see this log
//   console.log(event.target.innerText);

//   // Example
//   if (event.target.classList.contains('numbers')) { // checks if the clicked element has the class ‘number’
//     // Do something with a number
//   }

//   // Example
//   if (event.target.innerText === '*') {
//     // Do something with this operator
//   }
// });
