// 8kyu "Switch it Up!"
// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

// If your language supports it, try using a switch statement.

// function switchItUp(number){
// //Write your own Code!
// }



function switchItUp(number){
//Write your own Code!
  return ['Zero','One','Two','Three','Four','Five','Six','Seven','Eight','Nine'][number]
}


///////////////////
/////   OR    /////
///////////////////


function switchItUp(number){
  switch (number) {
      case 0: return 'Zero'
      break;
      case 1: return 'One'
      break;
      case 2: return 'Two'
      break;
      case 3: return 'Three'
      break;
      case 4: return 'Four'
      break;
      case 5: return 'Five'
      break;
      case 6: return 'Six'
      break;
      case 7: return 'Seven'
      break;
      case 8: return 'Eight'
      break;
      case 9: return 'Nine'
  }
}



///////////////////
/////   OR    /////
///////////////////


function switchItUp(number){
//Write your own Code!
  if (number == 0) {
    return 'Zero'
  } else if (number == 1) {
    return 'One'
  } else if (number == 2) {
    return 'Two'
  } else if (number == 3) {
    return 'Three'
  } else if (number == 4) {
    return 'Four'
  } else if (number == 5) {
    return 'Five'
  } else if (number == 6) {
    return 'Six'
  } else if (number == 7) {
    return 'Seven'
  } else if (number == 8) {
    return 'Eight'
  } else if (number == 9) {
    return 'Nine'
  }
}