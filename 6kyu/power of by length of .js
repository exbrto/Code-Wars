// 6kyu "Does my number look big in this?"
// A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits), which is narcissistic:

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1652 (4 digits), which isn't:

//     1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
// The Challenge:

// Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.

// This may be True and False in your language, e.g. PHP.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.



function narcissistic(value) {
  return String(value).split('').map(Number => Number ** String(value).length).reduce((acc,val) => acc + val, 0) === value ? true : false
}

// 1 + 125 + 27 true = 153
// value = 153 String(value) --> '153' we want to split it --> String(value).split('') --> ['1','5','3'] 
// map through for number and ** by the lenght of String(value) 
// --> String(value).split('').map(Number => Number ** String(value).length)