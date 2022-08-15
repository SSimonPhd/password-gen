//Variables
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//Password variable values
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Alphabetical characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Space for Uppercase conversion
space = [];

// Choices outside if statement
var choices;

// Uppercase convert 
var toUpper = function (x) {
    return x.toUpperCase();
};

// Variable for uppercase convert
alpha2 = alpha.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Generate code (this generates the button)
var generateBtn = document.querySelector("#generate");

  function generatePassword() {
    // Console log test
    console.log("Click!")

    // Psuedocode
    // 1. Prompt user for critera (pw length, char type)
    // 2. Validate input (between 8 - 128 and at least one char type)
    // 3. Generate pw

        // var userChoice1 = window.prompt("Chose length between 8 and 120 characters");
        // var userChoice2 = window.prompt("Chose if lower case")
        // var userChoice3 = window.prompt("Chose if upper case");
        // var userChoice4 = window.prompt("Chose if number");
        // var userChoice5 = window.prompt("Chose if special character");

    // 4. Display pw

    // Asks for user input
    enter = parseInt(prompt("What length is your password? Choose between 8 and 128"));

    // User validation 
    if (!enter) {
        alert("This needs a value");
    } else if (enter < 8 || enter > 128) {

        // Validate user input
        // Begin prompts
        enter = parseInt(prompt("You must choose between 8 and 128"));

    } else {
        // Once char length is vvalidated
        confirmLowercase = confirm("Include lower case letters?");
        confirmUppercase = confirm("Include uppercase letters?");
        confirmNumber = confirm("Include numbers?");
        confirmCharacter = confirm("Include special characters?");
    };

    // Else if for 4 invalid options
    if (!confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose at least one option!");

    }
    //  Else ifs to determine choices
    // Else if for 4 valids
    else if (confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, alpha, alpha2);
    }
    // Else if for 3 valids
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alpha2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alpha);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(alpha, alpha2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alpha, alpha2);
    }
    // Else if for 2 valids 
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);

    } else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alpha);

    } else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alpha2);
    }
    else if (confirmLowercase && confirmNumber) {
        choices = alpha.concat(number);

    } else if (confirmLowercase && confirmUppercase) {
        choices = alpha.concat(alpha2);

    } else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alpha2);
    }
    // Else if for 1 valid
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alpha;
    }
    // Uppercase conversion
    else if (confirmUppercase) {
        choices = space.concat(alpha2);
    };

    // Placeholder
    var password = [];

    // Random selection: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    // Converts password to string
    var ps = password.join("");
    UserInput(ps);
    return ps;
}

// Password to screen
function UserInput(ps) {
    document.getElementById("password").textContent = ps;

  // Write password to the #password input (needed generatePassword function to screen)
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
  }

  // Event listener to generate button (on click writes password)
  generateBtn.addEventListener("click", writePassword);{
    function myfunction() {
      alert (password);
    }
  }
}