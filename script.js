// Get references to the #generate element - DON'T CHANGE
var generateBtn = document.querySelector("#generate");
var passCri = { //does the variable name have to be included for each item in the object? or is this just common syntax
  passCriLength: 0,
  passCriUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"], // array length = 26
  passCriLowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"], // array length = 26
  passCriNumber: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9], // array length = 10
  passCriSpecial: ["`", "~","!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", "|", ";", ":", "'", ",", "<", ".", ">", "/", "?"] // array length = 30 but there should be two more
  // how to code \ and  " characters?????
}

/* Prompt user for password criteria:
  1. length of password 8-128 characters
     
  2. check boxes for parameters, must have at least one type(uppercase, lowercase, number, special char)
    create object?
  Validate input and throw error if invalid

  Generate password based on criteria and return a password 
*/
// Write password to the #password input - DON'T CHANGE
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button - DON'T CHANGE
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var newPass = "";
  var passLength;
  var upperCase; 
  var lowerCase;
  var numbers;
  var special;

  passLength = 0;
  passCri.passCriLength = 0;
  newPass = "";

  while (passLength < 8 || passLength > 128) {
    passLength = prompt("Enter a password length between 8 and 128 characters for a new password.");
    if (passLength === null){
      return "No length given"
    }
    else {
      if (!isFinite(passLength)) { //is there another way to make sure that it's an int?
      return "Please enter a password length between 8 and 128 characters.";
    } 
    else{
      if (passLength < 8 || passLength > 128){
        return "Please enter a password length between 8 and 128 characters"
      }
    
    else { ///alert?
      displayParameters();

      while (passCri.passCriLength < passLength){
        if (lowerCase === false && upperCase === false && numbers === false && special === false){
          return "Please select at least one parameter for your new password";
        }
        else {
          if (lowerCase === true && passCri.passCriLength < passLength){
            var lowLetter = passCri.passCriLowercase[Math.floor(Math.random()*26)]
            newPass = newPass + lowLetter;
            passCri.passCriLength++;
          } // study Math functions
          if (upperCase === true && passCri.passCriLength < passLength){
              var upLetter = passCri.passCriUpperCase[Math.floor(Math.random()*26)]
              newPass = newPass + upLetter;
              passCri.passCriLength++;
          }
          if( numbers === true && passCri.passCriLength< passLength){
            var num = passCri.passCriNumber[Math.floor(Math.random()*10)]
            newPass = newPass + num;
            passCri.passCriLength++;
          }
          if ( special === true && passCri.passCriLength < passLength){
            var spec = passCri.passCriLength[Math.floor(Math.random()*30)]
            newPass = newPass + spec;
            passCri.passCriLength++;
          }
        }
      }
    }
  }

}
  return newPass;
  function displayParameters(){
  lowerCase = confirm("Would you like your password to include lowercase letters?");
  upperCase = confirm("Would you like your password to include uppercase letters?");
  numbers = confirm("Would you like your password to include numbers?");
  special = confirm("Would you like your password to include special characters?");
}


  

}
}
