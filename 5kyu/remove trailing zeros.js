// 5kyu "Number of trailing Zeros of N"
// Write a program that will calculate the number of trailing zeros in a factorial of a given number.

// N! = 1 * 2 * 3 *  ... * N

// Be careful 1000! has 2568 digits...

// For more info, see: http://mathworld.wolfram.com/Factorial.html

// Examples
// N	Product	N factorial	Trailing zeros
// 6	1*2*3*4*5*6	720	1
// 12	1*2*3*4*5*6*7*8*9*10*11*12	479001600	2




function zeros (n) {
      let zeros = 0;

    while (n >= 5) {
        n = Math.floor(n / 5);
        zeros += n;
    }

    return zeros;
//   const nums = []
//   for(let i = 1; i <= n; i++) {
//     nums.push(i)
//   }
//   const numsArr = nums.reduce((a,b) => a * b, 1).toString()
//   let zeros = 0
//   for(let i = numsArr.length - 1; i >= 0; i--) {
//     if(numsArr[i] === '0') {
//       zeros++
//     } else {
//       break;
//     }
//   }
//   return zeros
}