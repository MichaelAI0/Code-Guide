// Define an array of button colors
var buttonColours = ['red', 'blue', 'green', 'yellow'];

// Initialize an empty array to store the game pattern
var gamePattern = [];

// Initialize an empty array to store the user's clicked pattern
var userClickedPattern = [];

// Initialize a variable to track if the game has started or not
var started = false;

// Initialize a variable to track the current level
var level = 0;

// Initialize a variable to store the game speed
var gameSpeed = 1000; // New variable for game speed

// Event listener for key press
document.addEventListener('keypress', function () {
  // Check if the game has not started
  if (!started) {
    // Update the level title
    document.getElementById('level-title').textContent = 'Level ' + level;

    // Generate the next sequence
    nextSequence();

    // Set started to true
    started = true;

    // Remove the 'game-over' class from the body
    document.body.classList.remove('game-over');
  }
});

// Event listener for button click
var buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Check if the game has started
    if (started) {
      // Get the color of the clicked button
      var userChosenColour = this.id;

      // Add the clicked color to the user's clicked pattern
      userClickedPattern.push(userChosenColour);

      // Play sound for the clicked color
      playSound(userChosenColour);

      // Animate the clicked button
      animatePress(userChosenColour);

      // Check the user's answer
      checkAnswer(userClickedPattern.length - 1);
    } else {
      // If the game has not started, show a visual indication of game over
      document.body.classList.remove('game-over');
      setTimeout(function () {
        document.body.classList.add('game-over');
      }, 100);
    }
  });
});

// Function to check the user's answer
function checkAnswer(currentLevel) {
  // Check if the user's pattern matches the game pattern at the current level
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // Check if the user has completed the current level
    if (userClickedPattern.length === gamePattern.length) {
      // Wait for a second and then generate the next sequence
      setTimeout(function () {
        nextSequence();
      }, 1000);

      // Update the level title to indicate success
      document.getElementById('level-title').textContent = 'SUCCESS!!';
    }
  } else {
    // Play the 'wrong' sound
    playSound('wrong');

    // Add the 'game-over' class to the body to indicate game over
    document.body.classList.add('game-over');

    // Update the level title to indicate game over and restart instructions
    document.getElementById('level-title').innerHTML = '<b>Game Over</b><br><br> Press Any Key to Restart';

    // Restart the game
    startOver();
  }
}

// Function to generate the next sequence
function nextSequence() {
  // Reset the user's clicked pattern
  userClickedPattern = [];

  // Increment the level
  level++;

  // Update the level title
  document.getElementById('level-title').textContent = 'Level ' + level;

  // Adjust the game speed every second level, if the current game speed is greater than 100
  if (level % 2 === 0 && gameSpeed > 100) {
    gameSpeed -= 100;
  }

  // Generate a random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);

  // Get a random color from the buttonColours array
  var randomChosenColour = buttonColours[randomNumber];

  // Add the random color to the game pattern
  gamePattern.push(randomChosenColour);

  // Loop through the game pattern and animate each color
  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(function () {
      document.getElementById(gamePattern[i]).style.opacity = 0;
      setTimeout(function () {
        document.getElementById(gamePattern[i]).style.opacity = 1;
      }, gameSpeed / 2);
    }, gameSpeed * i);
  }

  // Log the game pattern and game speed to the console
  console.log('gamePattern:', gamePattern);
  console.log('gameSpeed:', gameSpeed);
}

// Function to animate the button press
function animatePress(currentColor) {
  // Add the 'pressed' class to the current color button
  document.getElementById(currentColor).classList.add('pressed');

  // Remove the 'pressed' class after 100 milliseconds
  setTimeout(function () {
    document.getElementById(currentColor).classList.remove('pressed');
  }, 100);
}

// Function to play a sound
function playSound(name) {
  // Create a new Audio object with the sound file path
  var audio = new Audio('sounds/' + name + '.mp3');

  // Play the audio
  audio.play();
}

// Function to start over the game
function startOver() {
  // Reset the level, game pattern, started flag, and game speed
  level = 0;
  gamePattern = [];
  started = false;
  gameSpeed = 1000; // Resetting game speed
}
