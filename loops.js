let numbers = [1, 2, 3, 4, 5];

console.log("Array numbers:")
for (let a = 1; a <= 5; a++) {
  console.log(a);
}

console.log("Count down:")
let counter = 5;

while (counter>=1) {
  console.log(counter);
  counter--;
}

console.log("Even numbers:")
for (let b = 0; b < numbers.length; b++) {
  if (numbers[b] % 2 === 0) {
    console.log(numbers[b]);
  }
}

let sum = 0;

for (let c = 0; c < numbers.length; c++){
  sum += numbers[c];
} 

console.log("Sum:", sum);