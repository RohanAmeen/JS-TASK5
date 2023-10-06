//CHAPTER 26-30
//program no 1
    //  var userInput = prompt("Enter a positive integer:");

    //  var number = parseInt(userInput);

    //  if (!isNaN(number) && number > 0) {
    //      //? Calculate round, floor, and ceil values
    //      var roundValue = Math.round(number);
    //      var floorValue = Math.floor(number);
    //      var ceilValue = Math.ceil(number);

    //      document.write("<h1>Number Operations</h1>");
    //      document.write("<p>Number: " + number + "</p>");
    //      document.write("<p>Round Value: " + roundValue + "</p>");
    //      document.write("<p>Floor Value: " + floorValue + "</p>");
    //      document.write("<p>Ceiling Value: " + ceilValue + "</p>");
    //  } else {
    //      //? Display an error message if the input is invalid
    //      document.write("<p>Invalid input. Please enter a positive integer.</p>");
    //  }

    //PROGRAM 2
    //    var userInput = prompt("Enter a negative floating-point number:");

    //    var number = parseFloat(userInput);

    //    if (!isNaN(number) && number < 0) {
    //        //? Calculate round, floor, and ceil values
    //        var roundValue = Math.round(number);
    //        var floorValue = Math.floor(number);
    //        var ceilValue = Math.ceil(number);

    //        document.write("<h1>Number Operations</h1>");
    //        document.write("<p>Number: " + number + "</p>");
    //        document.write("<p>Round Value: " + roundValue + "</p>");
    //        document.write("<p>Floor Value: " + floorValue + "</p>");
    //        document.write("<p>Ceiling Value: " + ceilValue + "</p>");
    //    } else {
    //        //? Display an error message if the input is invalid
    //        document.write("<p>Invalid input. Please enter a negative floating-point number.</p>");
    //    }

//PROGRAM 3
    //      var userInput = prompt("Enter a number:");

    //      //? Parse the user input as a floating-point number
    //      var number = parseFloat(userInput);
 
    //      if (!isNaN(number)) {
    //          //? Calculate the absolute value
    //          var absoluteValue = Math.abs(number);
 
    //          //? Display the results in the browser
    //          document.write("<h1>Absolute Value</h1>");
    //          document.write("<p>The absolute value of " + number + " is " + absoluteValue + "</p>");
    //      } else {
    //          //? Display an error message if the input is invalid
    //          document.write("<p>Invalid input. Please enter a valid number.</p>");
    //      }

    //PROGRAM 4
    //   var diceValue = Math.floor(Math.random() * 6) + 1;

    //   ?Display the dice value in the browser
    //   document.write("<h1>Dice Simulation</h1>");
    //   document.write("<p>The dice shows: " + diceValue + "</p>");
    
    //PROGRAM 5
    //     var randomValue = Math.floor(Math.random() * 2);

    //     var heads = 0;
    //     var tails = 1;

        // ?Determine the result of the coin toss
    //     var result = (randomValue === heads) ? "Heads" : "Tails";

        // ?Display the coin toss result in the browser
    //     document.write("<h1>Coin Toss Simulation</h1>");
    //     document.write("<p>The coin shows: " + result + "</p>");

    //PROGRAM 6
     //? Generate a random number between 1 and 100
    //  var randomNumber = Math.floor(Math.random() * 100) + 1;

    //  ?Display the random number in the browser
    //  document.write("<h1>Random Number Generator</h1>");
    //  document.write("<p>Random number between 1 and 100: " + randomNumber + "</p>");

    //PROGRAM 7
     // Ask the user for their weight
     //var userInput = prompt("Please enter your weight:");

     //? Regular expression pattern to match valid input formats
    //  var pattern = /^(\d+(\.\d+)?)\s*(kgs?|kilograms?)?$/i;

     //? Check if the user input matches the pattern
    //  if (pattern.test(userInput)) {
         // Extract the numeric value from the input
        //  var weight = parseFloat(userInput);

        //  ?Display the weight in the browser
        //  document.write("<h1>Weight Input</h1>");
        //  document.write("<p>Your weight is: " + weight + " kg</p>");
    //  } else {
        //  ?Display an error message for invalid input
        //  document.write("<p>Invalid input. Please enter your weight in a valid format (e.g., 50, 50kgs, 50.2kgs, or 50.2kilograms).</p>");
     //}


     //PROGRAM 8
      //? Generate a random secret number between 1 and 10
    //   var secretNumber = Math.floor(Math.random() * 10) + 1;

    //   ?Ask the user to input a number between 1 and 10
    //   var userInput = prompt("Guess the secret number between 1 and 10:");

      //? Parse the user input as an integer
    //   var userGuess = parseInt(userInput);

      //? Check if the user's guess is valid and matches the secret number
    //   if (!isNaN(userGuess) && userGuess >= 1 && userGuess <= 10) {
        //   if (userGuess === secretNumber) {
              //? Congratulate the user for guessing correctly
            //   document.write("<h1>Secret Number Game</h1>");
            //   document.write("<p>Congratulations! You guessed the secret number (" + secretNumber + ") correctly!</p>");
        //   } else {
            //   ?Notify the user that their guess is incorrect
            //   document.write("<h1>Secret Number Game</h1>");
            //   document.write("<p>Sorry, your guess is incorrect. The secret number was " + secretNumber + ".</p>");
        //   }
    //   } else {
          //? Display an error message for invalid input
        //   document.write("<h1>Secret Number Game</h1>");
        //   document.write("<p>Invalid input. Please enter a number between 1 and 10.</p>");
    //   }


//CHAPTER 31-34

    //? Create a Date object to get the current date and time
    // var currentDate = new Date();

    // ?Convert the Date object to a string with the current date and time
    // var dateTimeString = currentDate.toLocaleString();

    //? Display the current date and time in the browser
    // document.write("<h1>Current Date and Time</h1>");
    // document.write("<p>Current date and time: " + dateTimeString + "</p>");

     //? Create an array of month names
    //  var monthNames = [
        // "January", "February", "March", "April", "May", "June",
        // "July", "August", "September", "October", "November", "December"
    // ];

    // ?Create a Date object to get the current month
    // var currentDate = new Date();
    // var currentMonthIndex = currentDate.getMonth(); // 0-based index

    //? Get the current month in words from the array
    // var currentMonth = monthNames[currentMonthIndex];

    // ?Alert the current month in words
    // alert("The current month is " + currentMonth);


      //? Create an array of day abbreviations
    //   var dayAbbreviations = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    //   ?Create a Date object to get the current day
    //   var currentDate = new Date();
    //   var currentDayIndex = currentDate.getDay(); // 0-based index

      //? Get the current day abbreviation from the array
    //   var currentDayAbbreviation = dayAbbreviations[currentDayIndex];

      //? Alert the current day abbreviation
    //   alert("The current day abbreviation is " + currentDayAbbreviation);


           // ?Create an array of day names
        //    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

           //? Create a Date object to get the current day
        //    var currentDate = new Date();
        //    var currentDayIndex = currentDate.getDay(); // 0-based index
   
           //? Get the current day name from the array
        //    var currentDayName = dayNames[currentDayIndex];
   
           //? Check if today is Saturday or Sunday
        //    if (currentDayName === "Saturday" || currentDayName === "Sunday") {
            //    alert("It's Fun day");
        //    } else {
            //    alert("It's not Fun day. Today is " + currentDayName);
        //    }


             //? Create a Date object to get the current date
            //  var currentDate = new Date();
            //  var currentDayOfMonth = currentDate.getDate(); // Get the day of the month
     
             //? Check if the current date is less than the 16th of the month
            //  if (currentDayOfMonth < 16) {
                //  alert("First fifteen days of the month");
            //  } else {
                //  alert("Last days of the month");
            //  }


                    // ?Determine the minutes since midnight, Jan. 1, 1970 (UTC)
        // var minutesSinceEpoch = Math.floor(Date.now() / (1000 * 60));

        //? Display the result
        // alert("Minutes since midnight, Jan. 1, 1970 (UTC): " + minutesSinceEpoch);


            //? Create a Date object to get the current time
            // var currentDate = new Date();
            // var currentHours = currentDate.getHours(); // Get the current hour (0-23)
    
            // ?Check if it's before noon (AM)
            // if (currentHours < 12) {
                // alert("It's AM");
            // } else {
                // alert("It's PM");
            // }