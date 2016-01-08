'use strict';

document.addEventListener('DOMContentLoaded', function() {

  var isFloat = false;
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
    result.innerHTML = '0';
  }

  function clearAll() {
    isFloat = false;
    needsCleared = true;
    isCalculating = false;
    operand = null;
    operator = null;
    currentOperator.innerHTML = '';
  }

  var point = document.getElementById('decimal');
  point.addEventListener('click', pointClicked);

  function pointClicked(event) {
    if (needsCleared) {
      result.innerHTML = '0';
      needsCleared = false;
    } else {
      if (!isFloat) {
        result.innerHTML = result.innerHTML.concat('.');
      }
    }
    isFloat = true;
  }

  var inverse = document.getElementById('negative');
  inverse.addEventListener('click', inverseClicked);

  function inverseClicked(event) {
    result.innerHTML = result.innerHTML * -1;
  }

  var percent = document.getElementById('percent');
  percent.addEventListener('click', percentClicked);

  function percentClicked(event) {
    result.innerHTML = result.innerHTML / 100;
  }

  document.addEventListener('keypress', keyPressed);

  function keyPressed(event) {
    var ascii = event.keyCode;
    var id;
    if (ascii > 47 && ascii < 58) {
      document.getElementById(String.fromCharCode(ascii)).click();
    } else {
      switch (ascii) {
        case 42:
          id = '#multiply';
          break;
        case 43:
          id = '#plus';
          break;
        case 45:
          id = '#subtract';
          break;
        case 46:
          id = '#decimal';
          break;
        case 47:
          id = '#divide';
          break;
        case 95:
          id = '#negative';
          break;
        case 99:
          id = '#clear';
          break;
        case 13:
        case 61:
          id = '#equals';
          break;
      }
      document.getElementById(String.fromCharCode(ascii)).click();
    }
  }

});