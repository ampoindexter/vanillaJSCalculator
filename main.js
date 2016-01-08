'use strict';

document.addEventListener('DOMContentLoaded', function() {

  var isFloating = false;
  var needsCleared = false;
  var isCalculating = false;
  var operand;
  var operator;

  var calc = document.getElementById('calculator');
  var result = document.getElementById('result');

  var numberButtons = document.getElementsByClassName('number');
  for (var i = 0; i < numberButtons.length; i++) {
    numberButtons[i].addEventListener('click', numberClicked);
  };

  function numberClicked(event) {
    if (result.innerHTML === '0' || needsCleared) {
      needsCleared = false;
      result.innerHTML = event.target.id;
    } else {
      result.innerHTML = result.innerHTML.concat(event.target.id);
    }
  }

  var operatorButtons = document.getElementsByClassName('operator');
  for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', operatorClicked);
  };

  function operatorClicked(event) {
    if (isCalculating) {
      result.innerHTML(solve());
    }
    switch (event.target.id) {
      case 'add':
        operator = '+';
        break;
      case 'subtract':
        operator = '-';
        break;
      case 'multiply':
        operator = 'x';
        break;
      case 'divide':
        operator = '÷';
        break;
    }
    operand = parseFloat(result.innerHTML);
    isCalculating = true;
    needsCleared = true;
    currentOperator.innerHTML = operator;
  }

  var equal = document.getElementById('equals');
  equal.addEventListener('click', equalClicked);

  function equalClicked(event) {
    result.innerHTML(solve());
    clearAll();
  }

  function solve() {
    var runningTotal = parseFloat(result.innerHTML);
    var total;
    switch (operator) {
      case '+':
        total = operand + runningTotal;
        break;
      case '-':
        total = runningTotal - operand;
        break;
      case 'x':
        total = operand * runningTotal;
        break;
      case ÷
    }
  }

});