#!/usr/bin/node
function factorial (number) {
  if (number <= 1 || isNaN(number)) {
    return 1;
  }
  return number * factorial(number - 1);
}

console.log(factorial(parseInt(process.argv[2])));
