// 7kyu "Validate a PIN Code"
// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false
// function validatePIN (pin) {
//   //return true or false
//   }



function validatePIN (pin) {
  //return true or false
  // if pin is == to 4 numbers || 6 digits
  if (pin.length === 4 || pin.length === 6) {
    for (let i = 0; i < pin.length; i++) {
      let char = pin.charAt(i);
      
      if (!(char >= '0' && char <= '9')) {
        return false;
      }
    }
    return true;
    
    } else {
      return false;
    }
  }