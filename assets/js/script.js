// Password Generator Function
var generatePassword = function() {

  // A do-while loop to ask the user to enter length of of password and to
  // verify that it is between 8 to 128 as well as enters a number
  do {
    var passLength = window.prompt("How long do you want the password to be? (8-128)");
    console.log("Password Length is: " + passLength);
  } while (isNaN(passLength) || passLength < 8 || passLength > 128)

  // All the variables to ask the user various questions for password requirements
  var passLC = window.confirm("Does your password need an lowercase?");
  var passUC = window.confirm("Does your password need an uppercase?");
  var passNum = window.confirm("Does your password need a numeric character?");
  var passSpec = window.confirm("Does your password need a special characters?");

  // Variable to Character acceptain List as well as generated password
  var charList = "";
  var randomPassword = [];
  
  // Adds lowercase characters to character list if the user request it
  if (passLC === true) {
    console.log("The password DOES requires a lowercase character");
    charList += "abcdefghijklmnopqrstuvwxyz";
  }
  // Adds uppercase characters to character list if the user request it
  if (passUC === true) {
    console.log("The password DOES requires a uppercase character");
    charList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  // Adds numeric characters to character list if the user request it
  if (passNum) {
    console.log("The password DOES requires a numeric character");
    charList += "1234567890";
  }
  // Adds special characters to character list if the user request it
  if (passSpec) {
    console.log("The password DOES requires a special character");
    charList += "+=!@#$%^&*()?<>";
  }

  // for loop to generate a password based on user requirements
  for (var i = 0; i < passLength; i++) {
    do {
    randomPassword += charList[Math.floor(Math.random() * charList.length)];
    } while (randomPassword === 0)
  }

  console.log(charList);
  console.log(randomPassword);

  return randomPassword;
}

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
