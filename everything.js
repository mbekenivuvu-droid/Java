function sum(n) {
  if (typeof n !== "number" || n % 1 !== 0) {
    return "The value is not a number";
  }

  let total = 0;
  for (let a = 0; a <= n; a++) {
    total += a;
  }
  return total;
}

console.log(sum(-3));
console.log(sum(3.5));
console.log(sum(5));
console.log(sum(9));
console.log(sum("10"));

function factorial(n) {
  if (typeof n !== "number" || n % 1 !== 0) {
    return "The value is not a number";
  }
  if (n < 0) {
    return "Factorial is not defined for negative numbers";
  }
  let result = 1;
  for (let b = n; b > 0; b--) {
    result *= b;
  }
 console.log(result)
}

factorial(9)


function funkyMath() {
  let numbers = Array.from(arguments);

  
  for (let n of numbers) {
    if (typeof n !== "number" || n % 1 !== 0) {
      return "The value is not a number";
    }
  }

  if (numbers.length === 2) {
    return numbers[1] - numbers[0]; 
  } else if (numbers.length === 3) {
    return numbers[0] + numbers[1] + numbers[2]; 
  } else if (numbers.length === 4) {
    return (numbers[0] + numbers[1]) / (numbers[2] + numbers[3]); 
  } else {
    return "Invalid number of arguments";
  }
}

// ---- Testing ----
console.log(funkyMath(5, 2));       
console.log(funkyMath(1, 2, 3));     
console.log(funkyMath(8, 2, 3, 5));  
console.log(funkyMath("8", 2));      
console.log(funkyMath(4.5, 2));     
console.log(funkyMath(3, 5, 7, 9, 11));


let arr = [1, 2, 33, 45, 6, 44];
let oddNumbers = [];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 !== 0) {
    oddNumbers.push(arr[i]); 
  }
}
oddNumbers.sort(function(a, b) {
  return a - b;
});
console.log("Odd numbers:", oddNumbers); 

let me = {
  firstName: "Vuyolwethu",
  lastName: "Mbekeni",
  age: 19,
  favouriteColour: "Purple",
  dreamCar: "Range Rover Velar"
};

me.favouriteFood = "Pizza";
delete me.age;
console.log(me);






