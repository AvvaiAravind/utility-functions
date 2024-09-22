// addition function with initial value and return keyword;
// sum += number is redundant so sum + number is enough
function add(...num) {
  const numbers = [...num];
  let sum = numbers.reduce((sum, number) => {
    return sum + number;
  }, 0);
  return sum;
}

// addition function without initial value and return keyword and note the expression sum + number is enough since it doesn't do assigning operation

function add(...num) {
  const numbers = [...num];
  let sum = numbers.reduce((sum, number) => sum + number);
  return sum;
}

// simple addition function
function add(num1, num2) {
  return num1 + num2;
}

//___________________________________________________********************_________________________________________________________________

// with numbers[0] it gives 0 for sub(5,0) with initial it subtract 5 - 5 so it returns 0

function sub(...num) {
  const numbers = [...num];
  let sub = numbers.reduce((crtTotal, number) => {
    return crtTotal - number;
  }, numbers[0]);
  return sub;
}

// without initial value give crct flow

function sub(...num) {
  const numbers = [...num];
  let sub = numbers.reduce((crtTotal, number) => {
    return crtTotal - number;
  });
  return sub;
}

// more concise subtraction function

function sub(...num) {
  const numbers = [...num];
  let sub = numbers.reduce((crtTotal, number) => crtTotal - number);
  return sub;
}

// more flexible function involving minuend and subtrahend

function sub(minuend, ...subtrahend) {
  const numbers = [...subtrahend];

  if (numbers.length === 0) {
    return minuend;
  }
  let sub = minuend;

  for (let number of numbers) {
    sub -= number;
  }

  return sub;
}

//simple sub function

function sub(num1, num2) {
  return num1 - num2;
}

//___________________________________________________********************_________________________________________________________________

// function to round off upto desired decimal

function roundOff(num, decimalValue = 0) {
  const rounder = Math.pow(10, decimalValue);
  return Math.round(num * rounder) / rounder;
}

// round off using || for default value

function roundOff(num, decimalValue) {
  const rounder = Math.pow(10, decimalValue || 0);
  return Math.round(num * rounder) / rounder;
}

//___________________________________________________********************_________________________________________________________________

// simple division function

function division(num1, num2) {
  if (num2 === 0) return "Error, cannot divided by 0";
  return num1 / num2;
}

//simple multiplication function

function multi(num1, num2) {
  return num1 * num2;
}

// multiplication using reduce initial value cause 150 cause 5 * 5 *6 for multi(5,6)

function multi(...num) {
  const numbers = [...num];
  let total = numbers.reduce((total, current) => total * current);
  return total;
}

// sum of array

function arraysSum(arrays) {
  let numbers = arrays;
  return numbers.reduce((sum, number) => sum + number, 0);
}

// using for of loop

function arraysSum(arrays) {
  let numbers = 0;
  for (let array of arrays) {
    numbers += array;
  }
  console.log(numbers);
  return numbers;
}
//___________________________________________________********************_________________________________________________________________

// array multiply

function arraysMulti(arrays) {
  let numbers = arrays;
  return numbers.reduce((sum, number) => sum * number);
}

//___________________________________________________********************_________________________________________________________________

// power function to calculate power

function power(num, pow) {
  return pow !== undefined && pow !== null ? Math.pow(num, pow) : num;
}
