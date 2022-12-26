#!/usr/bin/node
function secondLargest (values) {
  if (values.length <= 1) {
    return 0;
  }
  values.sort();
  return values[values.length - 2];
}

const list = process.argv.slice(2).map(x => parseInt(x));
console.log(secondLargest(list));
