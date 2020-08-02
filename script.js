// Assignment Code


//var generateBtn = 
document.querySelector("#generate").addEventListener("click", writePassword);

// Write password to the #password input
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "=", "{", "}", "[", "]", "<", ",", ".", ">", "?", "/"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

var selectLength ="";
var selectUpperCase;
var selectLowerCase;
var selectSpecialChar;
var selectNumbers;



function generatePassword() {
  var selectLength = (prompt("Please enter your desired password length, between 8 and 128 characters"));
while(selectLength <= 7 || selectLength >=129) {
  alert("Password must be between 8 and 128 characters in length.  Please try again");
  var selectLength = (prompt("Please enter your desired password length, between 8 and 128 characters"));
}

var selectUpperCase = confirm("Click OK if you would like your password to contain upper case letters");
var selectLowerCase = confirm("Click OK if you would like your password to contain lower case letters");
var selectSpecialChar = confirm("Click OK if you would like your password to contain special characters");
var selectNumbers = confirm ("Click OK if you would like your password to contain numbers");
  if(selectUpperCase === false && selectLowerCase === false && selectSpecialChar === false && selectNumbers === false) {
    alert("Please say OK to at least one option");
    var selectUpperCase = confirm("Click OK if you would like your password to contain upper case letters");
    var selectLowerCase = confirm("Click OK if you would like your password to contain lower case letters");
    var selectSpecialChar = confirm("Click OK if you would like your password to contain special characters");
    var selectNumbers = confirm ("Click OK if you would like your password to contain numbers");
  }

    var passwordChar = []

  if (selectUpperCase) {
    passwordChar = passwordChar.concat(upperCase)
  }

  if (selectLowerCase) {
    passwordChar = passwordChar.concat(lowerCase)
  }

  if(selectSpecialChar) {
    passwordChar = passwordChar.concat(specialChar)
  }

  if (selectNumbers) {
    passwordChar = passwordChar.concat(numbers)
  }

  console.log(passwordChar)

  var randomPassword = ""

  for (var i = 0; i <selectLength; i++) {
    randomPassword = randomPassword + passwordChar[Math.floor(Math.random() * passwordChar.length)];
    console.log(randomPassword)
  }
  return randomPassword;
  }
  // function writePassword() {
  //   var password = generatePassword();
  //   var passwordText = document.querySelector("#password");
  
  //   passwordText.value = password;
  // }
//DON'T BE AFRAID TO STICK MORE #S IN THERE
  function writePassword(){
  //document.getElementById("password").value = password;
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password; 
  }


// Add event listener to generate button

//generateBtn.addEventListener("click", writePassword);
