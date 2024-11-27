function collectUniqueNumbers() {
  let numbers = new Set();
  let input;

  console.log("Enter numbers. If you repeat a number, the program will stop.");

  while (true) {
    input = parseFloat(prompt("Enter a number:"));

    if (numbers.has(input)) {
      console.log(`The number ${input} has already been entered. Stopping...`);
      break;
    }

    numbers.add(input); // Add the number to the set
  }
  let sortedNumbers = Array.from(numbers).sort((a, b) => a - b);
  console.log("Numbers entered in ascending order:");
  console.log(sortedNumbers.join(", "));
}

collectUniqueNumbers();
