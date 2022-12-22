#!/usr/bin/node
function second_largest (values) {
  if (values.length <= 1) {
    return 0;
  }
  values.sort();
  return values[values.length - 2];
}

const list = process.argv.slice(2).map(x => parseInt(x));
console.log(second_largest(list));
