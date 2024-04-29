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

/**
 * Utility function to calculate the current theme setting.
 * Look for a local storage value.
 * Fall back to system setting.
 * Fall back to light mode.
 */
function calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
}) {
  if (localStorageTheme !== null) {
    return localStorageTheme;
  }

  if (systemSettingDark.matches) {
    return "dark";
  }

  return "light";
}

/**
 * Utility function to update the button text and aria-label.
 */
function updateButton({ buttonEl, isDark }) {
  const newCta = isDark ? "🌙" : "🌞";
  // use an aria-label if you are omitting text on the button
  // and using a sun/moon icon, for example
  buttonEl.setAttribute("aria-label", newCta);
  buttonEl.innerText = newCta;
}

/**
 * Utility function to update the theme setting on the html tag
 */
function updateThemeOnHtmlEl({ theme }) {
  document.querySelector("html").setAttribute("data-theme", theme);
}

/**
 * On page load:
 */

/**
 * 1. Grab what we need from the DOM and system settings on page load
 */
const button = document.querySelector("[data-theme-toggle]");
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

/**
 * 2. Work out the current site settings
 */
let currentThemeSetting = calculateSettingAsThemeString({
  localStorageTheme,
  systemSettingDark,
});

/**
 * 3. Update the theme setting and button text accoridng to current settings
 */
updateButton({ buttonEl: button, isDark: currentThemeSetting === "dark" });
updateThemeOnHtmlEl({ theme: currentThemeSetting });

/**
 * 4. Add an event listener to toggle the theme
 */
button.addEventListener("click", (event) => {
  const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

  localStorage.setItem("theme", newTheme);
  updateButton({ buttonEl: button, isDark: newTheme === "dark" });
  updateThemeOnHtmlEl({ theme: newTheme });

  currentThemeSetting = newTheme;
});
