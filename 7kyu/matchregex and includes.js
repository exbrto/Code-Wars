// 7kyu "Vowel Count"
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



function getCount(str) {
  const vowels = 'aeiouAEIOU'
  
  return str.split('').filter(s => vowels.includes(s)).length
  
}


////////////////
/////  OR  /////
////////////////


function getCount(str) {
  return (str.match(/[aeiouAEIOU]/g) || []).length
};