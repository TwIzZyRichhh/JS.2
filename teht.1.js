let numbers = [];

console.log('Please enter five numbers:');

for (let i = 0; i < 5; i++) {
  let num = parseFloat(prompt(`Enter number ${i + 1}:`));
  numbers.push(num);
}

console.log('\nThe numbers in reverse order are:');
for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}
