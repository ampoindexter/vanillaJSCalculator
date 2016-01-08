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
      result.innerHTML = result.innerHTML.concat(event.target.innerHTML);
    }
  }

  var operatorButtons = document.getElementsByClassName('operator');
  for (var i = 0; i < operatorButtons.length; i++) {
    operatorButtons[i].addEventListener('click', operatorClicked);
  };

  function operatorClicked(event) {
    if (isCalculating) {
      result.innerHTML = solve();
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
    result.innerHTML = solve();
    clearAll();
  }

  function solve() {
    var current = parseFloat(result.innerHTML);
    var total;
    switch (operator) {
      case '+':
        total = operand + current;
        break;
      case '-':
        total = operand - current;
        break;
      case 'x':
        total = operand * current;
        break;
      case '÷':
        if (current === 0) {
          total = 'Error: undefined'
        } else {
          total = operand / current;
        }
        break;
        default: total = current;
    }
    return total;
  }

  var clear = document.getElementById('clear');
  clear.addEventListener('click', clearClicked);

  function clearClicked(event) {
    clearAll();
    result.innerHTML = "0";
  }

  function clearAll() {
    isFloating = false;
    needsCleared = true;
    isCalculating = false;
    operand = null;
    operator = null;
    currentOperator.innerHTML = '';
  }

  var point = document.getElementById('decimal');
  point.addEventListener('click', pointClicked);

  function pointClicked(event) {

  }

});