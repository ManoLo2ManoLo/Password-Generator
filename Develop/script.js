// Assignment code here
document.getElementById("generate").addEventListener("click", passwordCode);

function passwordCode() {
  passLength();
  passLC();
  passUC();
  passNum();
  passSpec();
  passGenerator();
}

// function to see how long the generated password has to be
var passLength = function(pLength) {
  var pLength = window.prompt("How long do you want the password to be? (8-128)");
  
  if(isNaN(pLength) || pLength < 8 || pLength > 128) {
    return passLength();
  }
  console.log("Password Length is: " + pLength);
  return pLength;
}

var number = passLength();

// function to see if the password needs lowercase character
var passLC = function() {
  var pLowerC = window.confirm("Does your password need an lowercase?");
  
  if (pLowerC) {
    console.log("The password DOES requires a lowercase character");
    return true;
  } else {
    console.log("The password DOES NOT requires a lowercase character");
    return false;
  }
}

// function to see if the password needs uppercase character
var passUC = function() {
  var pUpperC = window.confirm("Does your password need an uppercase?");
  
  if (pUpperC) {
    console.log("The password DOES requires a uppercase character");
    return true;
  } else {
    console.log("The password DOES NOT requires a uppercase characters");
    return false;
  }
}

// function to see if the password needs numeric character
var passNum = function() {
  var pNum = window.confirm("Does your password need a numeric character?");
  
  if (pNum) {
    console.log("The password DOES requires a numeric character");
    return true;
  } else {
    console.log("The password DOES NOT requires a numeric characters");
    return false;
  }
}

// function to see if the password needs special character
var passSpec = function() {
  var pSpec = window.confirm("Does your password need a special characters?");
  
  if (pSpec) {
    console.log("The password DOES requires a special character");
    return true;
  } else {
    console.log("The password DOES NOT requires a special characters");
    return false;
  }
}

var passGenerator = function(_pLength) {
  for (var i=0; i < number; i++) {
    console.log(Math.random());
  }
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
