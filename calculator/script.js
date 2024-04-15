document
.getElementById('calculateBtn')
.addEventListener('click', function() {

    // get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);
    var operation = document.getElementById('operation').value;
    var resultDisplay = document.getElementById('result');
  
    // Check inputs numeric
    if (isNaN(num1) || isNaN(num2)) {
      // Display error message and change background color
      resultDisplay.innerHTML = 'Error: Please enter valid numeric values in both fields';
      resultDisplay.classList.add('alert-danger');
      return;
    }
  
    //  calculation
    var result;
    switch(operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if(num2 !== 0) {
          result = num1 / num2;
        } else {
          resultDisplay.innerHTML = 'Error: Cannot divide by zero';
          resultDisplay.classList.add('alert-danger');
          return;
        }
        break;
      default:
        
        resultDisplay.innerHTML = 'Error: Invalid operation';
        resultDisplay.classList.add('alert-danger');
        return;
    }
  
    resultDisplay.innerHTML = 'Result: ' + result;
    resultDisplay.classList.remove('alert-danger');
    resultDisplay.classList.add('alert-info');
  });
  