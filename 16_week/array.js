  function sumInput() {

  let numbers = [];

  while (true) {

    let i = +prompt("Введите число");

    if (i === 0 || Number.isNaN(i)) break;

    numbers.push(+i);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }

  numbers.sort(function(a, b){return a-b});
  alert (numbers);

  return sum;
}
alert( sumInput() );