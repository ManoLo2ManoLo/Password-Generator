// Assignment code here
var generatePassword = function() {
  do {
    var passLength = window.prompt("How long do you want the password to be? (8-128)");
    console.log("Password Length is: " + passLength);
  } while (isNaN(passLength) || passLength < 8 || passLength > 128)

  var passLC = window.confirm("Does your password need an lowercase?");
  var passUC = window.confirm("Does your password need an uppercase?");
  var passNum = window.confirm("Does your password need a numeric character?");
  var passSpec = window.confirm("Does your password need a special characters?");

  var charList = " ";
  var randomPassword = [];
  
  if (passLC === true) {
    console.log("The password DOES requires a lowercase character");
    charList += "abcdefghijklmnopqrstuvwxyz";
  }
  if (passUC === true) {
    console.log("The password DOES requires a uppercase character");
    charList += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passNum) {
    console.log("The password DOES requires a numeric character");
    charList += "1234567890";
  }
  if (passSpec) {
    console.log("The password DOES requires a special character");
    charList += "+=!@#$%^&*()?<>";
  }

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
