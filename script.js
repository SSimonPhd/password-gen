// Assignment code here
var pwLength = 8;
var charType = "Lower Case";

var lengthOptions = [8 - 128];

var typeOptions = ["Upper case", "Lower case", "Number", "Special Character"];

var generatePassword = function() {
  // Ask user for their choice
  var userChoice = window.prompt("Enter length 8 - 120:");

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  } 
  else { 
    
  var userChoice2 = window.prompt("Enter character type:");
  }
}
  // Get random index from array of options
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

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
