// Array of button colors
var buttonColours = ['red', 'blue', 'green', 'yellow'];

// Array to store the pattern of the game
var gamePattern = [];

// Array to store the pattern of user's clicks
var userClickedPattern = [];

// Variable to track if the game has started or not
var started = false;

// Variable to store the current level of the game
var level = 0;

// Event listener for keypress event to start the game
document.addEventListener('keypress', function () {
  // Check if the game has not started yet
  if (!started) {
    // Update the level title
    document.getElementById('level-title').textContent = 'Level ' + level;
    // Generate the next sequence of the game
    nextSequence();
    // Set started to true
    started = true;
    // Remove the 'game-over' class from the body
    document.body.classList.remove('game-over');
  }
});

// Event listener for click event on buttons
document.querySelectorAll('.btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    // Check if the game has started
    if (started) {
      // Get the color of the button clicked by the user
      var userChosenColour = this.id;
      // Add the color to the user's clicked pattern
      userClickedPattern.push(userChosenColour);
      // Play sound for the clicked color
      playSound(userChosenColour);
      // Animate the button press
      animatePress(userChosenColour);
      // Check the user's answer
      checkAnswer(userClickedPattern.length - 1);
    } else {
      // If the game has not started, add the 'game-over' class to the body and remove it after 100ms
      document.body.classList.remove('game-over');
      setTimeout(function () {
        document.body.classList.add('game-over');
      }, 100);
    }
  });
});

// Function to check the user's answer
function checkAnswer(currentLevel) {
  // Check if the user's clicked pattern matches the game pattern at the current level
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // Check if the user has completed the current level
    if (userClickedPattern.length === gamePattern.length) {
      // Wait for 1 second and then generate the next sequence
      setTimeout(function () {
        nextSequence();
      }, 1000);
      // Update the level title to indicate success
      document.getElementById('level-title').textContent = 'SUCCESS!!';
    }
  } else {
    // Play the 'wrong' sound
    playSound('wrong');
    // Add the 'game-over' class to the body
    document.body.classList.add('game-over');
    // Update the level title to indicate game over and restart instructions
    document.getElementById('level-title').innerHTML = '<b>Game Over</b><br><br> Press Any Key to Restart';
    // Restart the game
    startOver();
  }
}

// Function to generate the next sequence of the game
function nextSequence() {
  // Reset the user's clicked pattern
  userClickedPattern = [];
  // Increment the level
  level++;
  // Update the level title
  document.getElementById('level-title').textContent = 'Level ' + level;
  // Generate a random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);
  // Get a random color from the buttonColours array
  var randomChosenColour = buttonColours[randomNumber];
  // Add the random color to the game pattern
  gamePattern.push(randomChosenColour);
  // Loop through the game pattern and animate the buttons
  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(function () {
      // Set the opacity of the button to 0
      document.getElementById(gamePattern[i]).style.opacity = 0;
      setTimeout(function () {
        // Set the opacity of the button to 1 after 100ms
        document.getElementById(gamePattern[i]).style.opacity = 1;
      }, 100);
    }, 500 * i);
  }
  // Log the game pattern to the console
  console.log('gamePattern:', gamePattern);
}

// Function to animate the button press
function animatePress(currentColor) {
  // Get the element with the current color
  var element = document.getElementById(currentColor);
  // Add the 'pressed' class to the element
  element.classList.add('pressed');
  setTimeout(function () {
    // Remove the 'pressed' class from the element after 100ms
    element.classList.remove('pressed');
  }, 100);
}

// Function to play sound for a given name
function playSound(name) {
  // Create a new Audio object with the sound file path
  var audio = new Audio('sounds/' + name + '.mp3');
  // Play the audio
  audio.play();
}

// Function to restart the game
function startOver() {
  // Reset the level
  level = 0;
  // Clear the game pattern
  gamePattern = [];
  // Set started to false
  started = false;
}

/*
    This JavaScript code snippet is part of a game and contains several functions and event handlers:

    1. `playSound(userChosenColour)`: This function plays a sound associated with the user's chosen color. The `userChosenColour` parameter is the name of the sound file to play.

    2. `animatePress(userChosenColour)`: This function creates a visual effect of a button press for the user's chosen color. The `userChosenColour` parameter is the ID of the HTML element to animate.

    3. `checkAnswer(userClickedPattern.length - 1)`: This function checks the user's answer against the game's pattern. The parameter is the index of the last color in the user's clicked pattern.

    4. The `else` block is executed if the game has not started. It adds the 'game-over' class to the body of the document and removes it after 100 milliseconds, creating a flashing effect.

    5. `checkAnswer(currentLevel)`: This function checks if the user's clicked pattern matches the game pattern at the current level. If the patterns match and the user has completed the current level, it waits for 1 second and then generates the next sequence. It also updates the level title to indicate success. If the patterns do not match, the function does not do anything (the code for this case is not shown in the snippet).

    6. `nextSequence()`: This function is not defined in the snippet, but it's likely that it generates the next sequence of colors for the game.

    7. The event listener at the end of the snippet listens for click events on buttons with the class 'btn'. When a button is clicked, it gets the user's chosen color, plays the associated sound, animates the button press, and checks the user's answer. If the game has not started, it creates a 'game-over' flashing effect.
*/
