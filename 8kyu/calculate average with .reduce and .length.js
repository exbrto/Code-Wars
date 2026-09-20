// 8kyu "Calculate Average"
// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.



function findAverage(array) {
  let sum = array.reduce((acc, val) => acc + val,0);
  let prod = sum / array.length
  return array.length === 0 ? 0 : prod;
}