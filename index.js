/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const meterConversion = document.querySelector(".content-meter");
const volumeConversion = document.querySelector(".content-volume");
const massConversion = document.querySelector(".content-mass");
const inputNumber = document.querySelector(".hero-input");
const convertButton = document.querySelector(".hero-btn");

function getInputVal() {
  let mainValue = inputNumber.value;
  meterConversion.textContent = `${mainValue} meters = ${(
    mainValue * 3.28084
  ).toFixed(3)} feet | ${mainValue} feet = ${(mainValue / 3.28084).toFixed(
    3
  )} meters`;

  volumeConversion.textContent = `${mainValue} liters = ${(
    mainValue * 0.264172
  ).toFixed(3)} gallons | ${mainValue} gallon = ${(
    mainValue / 0.264172
  ).toFixed(3)} liters`;

  massConversion.textContent = `${mainValue} kilogram = ${(
    mainValue * 2.2046
  ).toFixed(3)} pounds | ${mainValue} pound = ${(mainValue / 2.2046).toFixed(
    3
  )} kilograms`;
}

convertButton.addEventListener("click", getInputVal);
