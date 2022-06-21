// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

// all char types
function generatePasswordAll(length) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*_-+=";
  let passwordStart = "";

  for (let i = length / 3; i > 0; i--) {
    passwordStart = passwordStart + 
    alphabet[getRandomInt(alphabet.length)] + 
    numbers[getRandomInt(numbers.length)] + 
    symbols[getRandomInt(symbols.length)];
  };
  return passwordStart.slice(0, length);
};

// alphabet chars
function generatePasswordAlpha(length) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  let passwordStart = "";

  for (let i = length; i > 0; i--) {
    passwordStart = passwordStart + 
    alphabet[getRandomInt(alphabet.length)];
  };
  return passwordStart.slice(0, length);
};

// number and alphabet chars
function generatePasswordNumbers(length) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  let passwordStart = "";

  for (let i = length / 2; i > 0; i--) {
    passwordStart = passwordStart + 
    alphabet[getRandomInt(alphabet.length)] + 
    numbers[getRandomInt(numbers.length)];
  };
  return passwordStart.slice(0, length);
};

// letters and special chars
function generatePasswordSpecial(length) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const symbols = "!@#$%^&*_-+=";
  let passwordStart = "";

  for (let i = length / 3; i > 0; i--) {
    passwordStart = passwordStart + 
    alphabet[getRandomInt(alphabet.length)] +  
    symbols[getRandomInt(symbols.length)];
  };
  return passwordStart.slice(0, length);
};

// Shuffles final password result
function shuffleMe (str) {
  let arr = str.split("");
  let len = arr.length;
  for (i = len; i > 0; i--) {
    let j = getRandomInt(len);
    let temp = arr[i]
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.join("");
}

// checks for password recs based on selections
// checks all (currently gives an error citing the .length as null)
// function regCheck(str) {
//   let regEx = /[\S]gi/;
//   result = str.match(regEx);
//   check1 = str.length;
//   check2 = result.length;
//   if (check1 !== check2) {
//     writePassword();
//   }
// }



function writePassword() {
  // change the paramater of generatepasswordAll to change password length
  var passwordFinal = shuffleMe(generatePasswordAll(10));
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordFinal;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// preference selector (from here down, all work is for the dropdown menu. This menu is currently incomplete)


function selectOption() {
  let selectElement = document.querySelector('#select');
  let output = selectElement.options[selectElement.selectedIndex].value;
  

  if (output == "all") {
    writePassword(generatePasswordAll(10))
  } else if (output == "letters") {
    writePassword(generatePasswordAlpha(10))
  } else if (output == "special") {
    writePassword(generatePasswordSpecial(10))
  } else if (output == "numbers") {
    writePassword(generatePasswordNumbers(10))
  } else {
    return "This isnt working";
  }

  }

  // x will be output from selectoption: passswordCreate(selectOption)
function passwordCreate(x) {
  if (x == "all") {
    return writePassword(generatePasswordAll(10))
  } else if (x == "letters") {
    return writePassword(generatePasswordAlpha(10))
  } else if (x == "special") {
    return writePassword(generatePasswordSpecial(10))
  } else if (x == "numbers") {
    return writePassword(generatePasswordNumbers(10))
  } else {
    return "This isnt working";
  }
};


