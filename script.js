// Starter code (this generates the button)
var generateBtn = document.querySelector("#generate");

  function generatePassword() {
    console.log("Button working")
// 1. Prompt user for critera (pw length, char type)
// 2. Validate input (between 8 - 128 and at least one char type)
// 3. Generate pw




// 4. Display pw

    return "#password";
  }

// Write password to the #password input (needs generatePassword function to display to screen)
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button (on click writes password)
generateBtn.addEventListener("click", writePassword);
