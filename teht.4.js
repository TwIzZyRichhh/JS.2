function collectAndSortNumbers() {
  let numbers = [];
  let input;

  console.log('Enter numbers. Type 0 to finish.');

  do {
    input = parseFloat(prompt('Enter a number (0 to stop):'));
    if (!isNaN(input) && input !== 0) {
      numbers.push(input);
    }
  } while (input !== 0);

  numbers.sort((a, b) => b - a);

  // Print the sorted numbers to the console
  console.log('Numbers in descending order:');
  console.log(numbers.join(', '));
}

collectAndSortNumbers();
