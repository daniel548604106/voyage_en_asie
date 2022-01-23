function fibonacciSequence(number) {
  if (number === 0) {
    return 0;
  } else if (number === 1) {
    return 1;
  } else {
    return fibonacciSequence(number - 1) + fibonacciSequence(number - 2);
  }
}

console.log(fibonacciSequence(3));
console.log(fibonacciSequence(8));
