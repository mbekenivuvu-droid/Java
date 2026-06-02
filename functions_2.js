function multiply(a, b, c){
  return a * b * c;
}

let result = multiply(3, 7, 9)
console.log(result); 

let convertToSeconds = function(minutes, seconds) {
  return (minutes * 60);
}; 

console.log(convertToSeconds(23, 60)); 

function fahrenheitToCelsius(fahrenheit) {
  return (5 / 9) * (fahrenheit - 32);
}

let celsius = fahrenheitToCelsius(97);
console.log(celsius);

function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("Vendetta"));

function countVowels(str) {
  
  let vowels = "AaEeIiOoUu"
  let count = 0;

  for (let d = 0; d < str.length; d++) {
    if (vowels.includes(str[d])) {
      count++;
    }
  }
  
  return count;
}

console.log(countVowels("Lymphangioleiomyomatosis"))

function isPrime(num) {
  if (num <= 1) return false;
  if (num == 2) return true;

  for (let e = 2; e <= Math.sqrt(num); e++) {
    if (num % e == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(3));
console.log(isPrime(12));
console.log(isPrime(17));
console.log(isPrime(19));





