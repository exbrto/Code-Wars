// 8kyu "Calculate BMI"
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// function bmi(weight, height) {
//   return "";
// }


function bmi(weight, height) {
  const body = weight / height**2
  if (body <= 18.5) {
    return "Underweight"
  } else if (body <= 25.0) {
    return "Normal"
  } else if (body <= 30.0) {
    return "Overweight"
  } else if (body > 30) {
    return "Obese"
}

}