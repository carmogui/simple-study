function evenOrOdd(number) {
  return `the number ${number} is ${number % 2 === 0 ? 'even' : 'odd'}`;
}

function recursiveFactorial(num = 0) {
  if (num === 1) {
    return 1;
  } else if (num > 1) {
    return num * recursiveFactorial(num - 1);
  }
}

// console.log(evenOrOdd(2));
console.log(recursiveFactorial(5));
