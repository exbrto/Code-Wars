// 7kyu "Isograms"
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// function isIsogram(str){
 
// }



function isIsogram(str){
  str = str.toLowerCase();
  let emptyStr = ' ';
  // no letter can repeat
  for (let i = 0; i < str.length; i++) {
    if (!emptyStr.includes(str.at(i))) {
      emptyStr += str.at(i)
    } else {
      return false
    }
  } 
  return true
}