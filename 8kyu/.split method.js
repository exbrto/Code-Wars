// 8kyu "Abbreviate a two word name"
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// function abbrevName(name){
//     // code away
// }


function abbrevName(name){
    // code away
 let first = name.split(" ")[0]
 let second = name.split(" ")[1]
 return `${first.at(0).toUpperCase()}.${second.at(0).toUpperCase()}`
}