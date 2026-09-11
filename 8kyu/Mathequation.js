// 8kyu "Twice as old"
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Calculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// function twiceAsOld(dadYearsOld, sonYearsOld) {
//   // your code here
// }



function twiceAsOld(dadYearsOld, sonYearsOld) {
  // your code here
  let x = dadYearsOld - 2 * sonYearsOld
  // if x = 10 : 30 - 2 * 20
  //             30 - 40
  //            x = -10
  
  return x < 0 ? x * -1 : x;
}