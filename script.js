"use strict";
const calculateTemp = () => {
  let numbers = document.getElementById("temp").value;
  // console.log(numbers);
  let selectedOption = document.getElementById("temp_diff");
  let optionsValue = selectedOption.options[selectedOption.selectedIndex].value;
  // console.log(optionsValue);
  let resultContainer = document.getElementById("resultContainer");
  const celToFah = (cel) => {
    let fahrenheit = Math.round((cel * 9) / 5 + 32);
    return fahrenheit;
  };
  const fahToCel = (fah) => {
    let celsius = Math.round(((fah - 32) * 5) / 9);
    return celsius;
  };

  if (optionsValue == "cel") {
    let result = celToFah(numbers);
    resultContainer.innerHTML = `= ${result} ° Fahrenheit`;
  } else {
    let result = fahToCel(numbers);
    resultContainer.innerHTML = ` = ${result} ° Celsius`;
  }
};
