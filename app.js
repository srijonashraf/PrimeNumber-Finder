const button = document.querySelector("button");
var inputField = document.querySelector("#input");
var output = document.querySelector("#output");

inputField.addEventListener("focus", function () {
  output.style.width = "100vh";
});

inputField.addEventListener("blur", function () {
  output.style.width = "50vh";
});

button.addEventListener("click", function () {
  const input = document.querySelector("#input").value;
  const numbers = input.split(" ");
  console.log(numbers);

  output.value = "";
  for (let i = 0; i < numbers.length; i++) {
    let isPrime = true;
    for (let j = 2; j < numbers[i]; j++) {
      if (numbers[i] % j === 0 && numbers[i] != "") {
        isPrime = false;
        output.value += `${numbers[i]} is not a Prime Number.\n`;
        break;
      }
    }
    if (isPrime && numbers[i] != "") {
      output.value += `${numbers[i]} is a Prime Number.\n`;
    }
  }
});
