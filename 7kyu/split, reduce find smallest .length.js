// 7kyu "SHortest Word"
// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



function findShort(s){
  let word = s.split(' ');
  
  let small = word.reduce((short, val) => {
    return val.length < short.length ? val : short
  })
  return small.length
}