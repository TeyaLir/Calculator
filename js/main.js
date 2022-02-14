function calc(a, operator, b) {
  const isValid = 
    typeof a == 'number' && 
    typeof b == 'number' && 
    operator !== undefined;

  const operations = {
    sub: a - b,
    sum: a + b,
    mult: a * b,
    div: a / b
  };

  if (isValid) {
    if (operator in operations) {
      return operations[operator];
    } else {
      return "Unknow operation";
    }
  } else {
    return "Error";
  }
}


console.log(calc(3, 'sum', 5));
console.log(calc(10, 'sub', 6));
console.log(calc(2, 'mult', 7));
console.log(calc(20, 'div', 7));
console.log(calc(16, 'div', 0));
console.log(calc(5, '', 7));
console.log(calc('a', 'sub', 9));