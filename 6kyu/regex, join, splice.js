// 6kyu "Create Phone Number"
// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

// Example
// createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
// The returned format must be correct in order to complete this challenge.

// Don't forget the space after the closing parentheses!



function createPhoneNumber(numbers){
  // make the numbers param into a string and remove commas
  // slice the array to make a string of a phone number
 const clean = String(numbers).replace(/[^0-9]/g, '')
 const one = clean.slice(0, 3)
 const two = clean.slice(3, 6)
 const three = clean.slice(6)
 return `(${one}) ${two}-${three}`
}


////////////////
////// OR //////
////////////////


function createPhoneNumber(numbers){
  // make the numbers param into a string and remove commas
  // slice the array to make a string of a phone number
 const clean = numbers.join('')
 const one = clean.slice(0, 3)
 const two = clean.slice(3, 6)
 const three = clean.slice(6)
 return `(${one}) ${two}-${three}`
}


////////////////
////// OR //////
////////////////


function createPhoneNumber(numbers){
  numbers.splice(0, 0, '(')
  numbers.splice(4, 0, ')')
  numbers.splice(5, 0, ' ')
  numbers.splice(9, 0, '-')
  return numbers.join('')
}