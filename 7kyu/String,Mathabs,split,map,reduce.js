// 7kyu "Summing a Number's Digits"
// Write a function which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

// For example: (Input --> Output)

// 10 --> 1
// 99 --> 18
// -32 --> 5



function sumDigits(number) {
  return String(Math.abs(number)).split('').map(Number).reduce((acc, val) => acc + val, 0)
}