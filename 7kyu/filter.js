// 7kyu "List filtering"
// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]




function filter_list(l) {
  return l.filter(Number.isInteger)
}


//////////////
///// OR /////
//////////////


function filter_list(l) {
  // Return a new array with the strings filtered out
  // Remove all non integers from the array
  // filter through the array and look for only numbers
  const noStr = l.filter(num => typeof num === 'number') //add && for not a number
  return noStr
}