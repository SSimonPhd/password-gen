// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input - All code goes in here
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // All code goes in here

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
