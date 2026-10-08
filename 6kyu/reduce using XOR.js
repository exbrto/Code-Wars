// 6kyu "Find the odd int"
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).



function findOdd(A) {
  // Return a number that appears an odd number of times in an array, every array will 
  // have a number that will appear an odd number of times.
  // use XOR, XORing a number by itself cancels it out ex 9 ^ 9 = 0
  // all numbers that appear an even amount of times will cancel themselves out
  // an array with 4,5,4,3,4,5,3 will return 4 when using XOR because 5 & 3 will cancel themselves out
  return A.reduce((acc, val) => acc ^ val, 0)
}