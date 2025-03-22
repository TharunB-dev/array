let numbers = [];

function getArray() {
  const input = document.getElementById("input").value;
  numbers = input
    .split(",")
    .map((num) => parseFloat(num.trim()))
    .filter((num) => !isNaN(num));
}

function displayResult(text) {
  document.getElementById("result").innerText = text; 
}

function even() {
  getArray();
  displayResult("Even numbers: " + numbers.filter((num) => num % 2 === 0).join(", "));
}

function Odd() {
  getArray();
  displayResult("Odd numbers: " + numbers.filter((num) => num % 2 !== 0).join(", "));
}

function Max() {
  getArray();
  displayResult("Maximum: " + Math.max(...numbers));
}

function Min() {
  getArray();
  displayResult("Minimum: " + Math.min(...numbers));
}

function Sum() {
  getArray();
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  displayResult("Sum: " + sum);
}

function Average() {
  getArray();
  if (numbers.length > 0) {
    const average = numbers.reduce((acc, num) => acc + num, 0) / numbers.length;
    displayResult("Average: " + average.toFixed(2));
  }
}
