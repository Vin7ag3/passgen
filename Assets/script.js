// Assignment code here

// Define array for numbers
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// Define array for lowercase Alpha
var lowercaseAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Creates new array applied to lowercaseAlpha and converts to UpperCase.
var uppercaseAlpha = lowercaseAlpha.map(alpha => alpha.toUpperCase());
// Define Symbol/Special Characters
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "=", "_", "+", "[", "]", "{", "}", "|", ";", "'", ":", ".", "/", "<", ">", "?"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Define function to generatePassword
function generatePassword() {
  var passwordLength; // Variable for password length.
// Loop to prompt user for specified password length.  
  do {
    passwordLength = parseInt(prompt("How many characters for your password? Choose between 8 to 128"));
} while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128);

var includeNumbers = confirm("Include numbers?");// include numbers
var includeLowercase = confirm("Include lowercase alpha?");// include lowercase
var includeUppercase = confirm("Include uppercase alpha?");// include uppercase
var includeSymbols = confirm("Include symbols?");// include symbols

// if none were selected and return to empty string ""
if (!includeNumbers && !includeSymbols && !includeUppercase && !includeLowercase) {
  alert("You must choose one of the options");
  return "";
}

var randomChars = [];// empty array that will store the characters

if (includeNumbers) {
  randomChars = randomChars.concat(numbers);// if user chooses numbers add to array
}
if (includeLowercase) {
  randomChars = randomChars.concat(lowercaseAlpha);// if user chooses lowecase alpha add to array
}
if (includeUppercase) {
  randomChars = randomChars.concat(uppercaseAlpha);// if user chooses uppercase alpha add to array
}
if (includeSymbols) {
  randomChars = randomChars.concat(symbols);// if user chooses symbols add to array
}

var password = [];// empty array to store password characters

for (var i = 0; i < passwordLength; i++) {
  var randomIndex = Math.floor(Math.random() * randomChars.length);// generate random index
  var randomPass = randomChars[randomIndex];// get random chara from randomChars using index
  password.push(randomPass);// add random chara to password array
}

return password.join("");// return the generated password

}
