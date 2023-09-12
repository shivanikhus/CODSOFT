"use strict";
// selector
const calcScreen = document.querySelector('.calculator-screen');
const calcPress = document.querySelectorAll('button');

// function declaration 
const inputNumber = function (num) {
  isOP = false;
  var1 = var1 + num;
};

const checkOPerator = function (op) {
  if (op === "+")
    return 0;
  if (op === "-")
    return 0;
  if (op === "*")
    return 1;
  if (op === "/")
    return 1;
};
const inputOperator = function (op) {
  if (!isOP) {
    isOP = true;
    screen.simplify(+var1, sum);
    var2 = sum;
    var1 = 0;
    screen.operator = op;
    console.log(var1, var2, sum);
  }
};

const inputEqual = function () {
  isOP = false;
  screen.simplify(+var1, sum);
  var2 = sum;
  var1 = checkOPerator(screen.operator);
  screen.screen = sum;
  calcScreen.value = sum;
};

const mousePressDetector = function (e) {
  screen.isActive = true;
  const target = e.target;
  const value = target.getAttribute('value');
  if (!target.classList.contains('all-clear') && !target.classList.contains('equal-sign')) {
    if (!isOP || !target.classList.contains('operator'))
      screen.screen += value;
    screen.addText('');
  }
  if (target.classList.contains('num')) {
    inputNumber(value);
  }

  if (target.classList.contains('equal-sign')) {
    inputEqual();
  }

  if (target.classList.contains('operator')) {
    inputOperator(value);
  }

  if (target.classList.contains('all-clear')) {
    screen.clearScreen();
  }

};


// constant declaration
let var1 = 0, var2 = 0, sum = undefined, isOP = false;
const screen = {
  isActive: false,
  operator: '+',
  operant: '',
  operant2: '',
  screen: '',
  sum: 0,
  init() {
    this.isActive = false;
    this.operant = 0;
    this.screen = '';
    this.operant = '';
    this.operant2 = '';
    this.sum = 0;
    sum = 0;
    var2 = 0;
    var1 = 0;
    isOP = false;
  },
  halfInit() {
    this.operant = '';
    this.operator = '';
  },
  clearScreen() {
    this.init();
    calcScreen.value = '';
  },
  addText(text) {
    calcScreen.value = screen.screen + String(text);
  },
  simplify(fi, sec) {
    if (this.operator === '+') {
      if (!sec)
        sec = 0;
      sum = fi + sec;
      return this.sum = fi + sec;

    }
    if (this.operator === '-') {
      if (!sec)
        sec = 0;
      sum = sec - fi;
      return this.sum = sec - fi;

    }
    if (this.operator === '*') {
      if (!sec)
        sec = 1;
      sum = fi * sec;
      return this.sum = fi * sec;

    }
    if (this.operator === '/') {
      if (!sec)
        sec = 1;
      sum = sec / fi;
      return this.sum = sec / fi;

    }
    // calcScreen.value = this.sum;
  }
};

calcPress.forEach(press => press.addEventListener('click', mousePressDetector));



