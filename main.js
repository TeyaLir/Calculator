// let a = +prompt('Введите первое число', '');
// let operator = prompt('Введите математическое действие', '');
// let b = +prompt('Введите второе число', '');

function calc(a, operator, b) {
  const isValid = typeof a == 'number' && typeof b == 'number' && operator !== undefined;

  if (isValid) {
    switch (operator) {
      case "+":
        return (a + b);

      case "-":
        return (a - b);

      case "*":
        return (a * b);

      case "/":
        if (b === 0) {
          return ("Делить на ноль нельзя");
        } else {
          return (a / b);
        }

      case "%":
        return (a % b);

      case "**":
        return (a ** b);

      default:
        return ("Неизвестный оператор");
    }

  } else {
    return 'Ошибка: Указаны не все параметры или они не равны числу.';
  }
}

console.log(calc(3, '+', 5));
console.log(calc(10, '-', 6));
console.log(calc(2, '*', 7));
console.log(calc(20, '/', 7));
console.log(calc(16, '/', 0));
console.log(calc(35, '%', 3));
console.log(calc(2, '**', 4));
console.log(calc(5, '', 7));
console.log(calc('a', '-', 9));

// alert(calc(a, operator, b));