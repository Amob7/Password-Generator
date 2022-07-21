//global variables
var newPassword = true;

var generatePassword = function() {
  //while loop for if they want a new password
  while(newPassword){
    //       Setting all local variables
    // resetting values
    var password = [];
    // length of the resulted password
    var passlength;
    // if there is a value in password
    var passwordV = true;

    // booleans declaring if user uses upper chars, lower chars, special chars, or numbers
    var useUpper =  false;
    var useLower = false;
    var useSpec = false;
    var useNumber = false;

    // variables as strings so it's easy to type in | AKA only to convert to an array
    var lowerChars = "abcdefghijklmnopqrstuvwxyz";
    var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialChars = "!#$%&()*+,./:;<=>?@[]\^_`{}|~";
    var numChars = "0123456789";
    // actual arrays of the variables used above that I will be using 
    var lowerArray = lowerChars.split("");
    var upperArray = upperChars.split("");
    var specialArray = specialChars.split("")
    var numArray = numChars.split("")

    // While there remain elements to shuffle.
    function shuffleArray(password) {
      for (let i = password.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [password[i], password[j]] = [password[j], password[i]];
      }
    }

    //conditionals function
    function conditionals(){
      if(lower === "Y"){
        useLower = true;
        password = password.concat(lowerArray);
      }
      if(upper === "Y"){
        useUpper = true;
        password = password.concat(upperArray);
      }
      if(special === "Y"){
        useSpec = true;
        password = password.concat(specialArray);
      }
      if(numb === "Y"){
        useNumber = true;
        password = password.concat(numArray);
      }
    }

    //    start of user input
    //initial user input for length
    var length = window.prompt("What size do you want your password. Must be between 8-128")

    //checks if user input is between 8 and 128
    if(length >= 8 && length <= 128){
      //sets length to passlength
      passlength = length;

      //initial user input for types of values
      var lower = window.prompt("Would you like to have lower spaced letters in your password. Y/N")
      var upper = window.prompt("Would you like to have upper spaced letters in your password. Y/N")
      var special = window.prompt("Would you like to have special characters in your password. Y/N")
      var numb = window.prompt("Would you like to have numbers in your password. Y/N")

      //convert user input to Uppercase to all Uppercase for easy comparison if they are a string
      if(typeof(lower) === 'string'){
        lower = lower.toUpperCase();
      }
      if(typeof(upper) === 'string'){
      upper = upper.toUpperCase();
      }
      if(typeof(special) === 'string'){
      special = special.toUpperCase();
      }
      if(typeof(numb) === 'string'){
      numb = numb.toUpperCase();
      }

      //if they entered y in at least one conditional
      if(lower != "Y" && upper != "Y" && special != "Y" && numb != "Y"){
        passwordV = false;
      }
      else{
        //checks to see if there isnt enough content for the password compared to how much the user wants
        while(password.length<passlength){
          conditionals();
        }
        passwordV = true;
      }

      //calls the shuffleArray function
      shuffleArray(password);
      //shortens the shuffled function to desired length
      password.length = passlength;

      password = password.join("");
    }

  //        user input if they want a new password
  // checks if they have a valid password
  if(passwordV){
    newPassword = window.confirm("Your current password is: \n" + password + "\nWould you like a different one?");
  }
  else{
    newPassword = false;
    window.alert("Bruh. You didnt enter a valid password or follow requirements. Try again")
  }
  }
  console.log(password)
}

var generateBtn = document.querySelector('#generate');

function writepasswords() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  generatePassword();
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writepasswords);
