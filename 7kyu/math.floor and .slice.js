// 7kyu "Get the middle character"
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

// function getMiddle(s) {
//   //Code goes here!
//     return '';
// }


function getMiddle(s) {
  //Code goes here!
  const value = Math.floor(s.length / 2) 
  
  if (s.length % 2 === 0) {
    return s.slice(value - 1, value + 1)
  } else {
    return s.slice(value, value + 1)
  }
  } 