// Array of button colors
var buttonColours = ['red', 'blue', 'green', 'yellow'];

// Array to store the pattern of the game
var gamePattern = [];

// Array to store the user's clicked pattern
var userClickedPattern = [];

// Variable to track if the game has started or not
var started = false;

// Variable to store the current level of the game
var level = 0;

// Time in seconds for each level
var timePerLevel = 10;

// Variable to store the timer ID
var timerId;

// Event listener for keypress event
document.addEventListener('keypress', function () {
  // Check if the game has not started
  if (!started) {
    // Update the level title
    document.getElementById('level-title').textContent = 'Level ' + level;
    // Start the next sequence
    nextSequence();
    // Set started to true
    started = true;
    // Remove the 'game-over' class from the body
    document.body.classList.remove('game-over');
  }
});

// Get all the buttons and add click event listeners to them
var buttons = document.querySelectorAll('.btn');
buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Check if the game has started
    if (started) {
      // Get the color of the clicked button
      var userChosenColour = this.getAttribute('id');
      // Add the color to the user's clicked pattern
      userClickedPattern.push(userChosenColour);
      // Play sound for the clicked button
      playSound(userChosenColour);
      // Animate the clicked button
      animatePress(userChosenColour);
      // Check the user's answer
      checkAnswer(userClickedPattern.length - 1);
    } else {
      // If the game has not started, add and remove the 'game-over' class to create a flash effect
      document.body.classList.remove('game-over');
      setTimeout(function () {
        document.body.classList.add('game-over');
      }, 100);
    }
  });
});

// Function to check the user's answer
function checkAnswer(currentLevel) {
  // Check if the user's answer matches the game pattern
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // Check if the user has completed the current level
    if (userClickedPattern.length === gamePattern.length) {
      // Wait for 1 second and then start the next sequence
      setTimeout(function () {
        nextSequence();
      }, 1000);
      // Update the level title to indicate success
      document.getElementById('level-title').textContent = 'SUCCESS!!';
      // Clear the timer
      clearInterval(timerId);
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
  // Increase the amount of time it takes for the timer to start as the levels increase
  let newInterval = 50;
  newInterval += level * 35;
  // Reset the user's clicked pattern
  userClickedPattern = [];
  // Increment the level
  level++;
  // Update the level title
  document.getElementById('level-title').textContent = 'Level ' + level;
  // Generate a random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);
  // Get the color corresponding to the random number
  var randomChosenColour = buttonColours[randomNumber];
  // Add the color to the game pattern
  gamePattern.push(randomChosenColour);
  // Iterate over the game pattern and animate the buttons
  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(function () {
      // Set the opacity of the button to 0
      document.getElementById(gamePattern[i]).style.opacity = 0;
      setTimeout(function () {
        // Set the opacity of the button to 1 after a delay
        document.getElementById(gamePattern[i]).style.opacity = 1;
      }, 100);
    }, 500 * i);
  }
  // Clear the timer
  clearInterval(timerId);
  // Start the timer after a delay
  setTimeout(function () {
    startTimer();
  }, 1000 + level * newInterval);
  // Log the game pattern to the console
  console.log('gamePattern:', gamePattern);
}

// Function to animate the button press
function animatePress(currentColor) {
  // Add the 'pressed' class to the button
  document.getElementById(currentColor).classList.add('pressed');
  setTimeout(function () {
    // Remove the 'pressed' class from the button after a delay
    document.getElementById(currentColor).classList.remove('pressed');
  }, 100);
}

// Function to play a sound
function playSound(name) {
  // Create an audio element with the specified sound file
  var audio = new Audio('sounds/' + name + '.mp3');
  // Play the audio
  audio.play();
}

// Function to start over the game
function startOver() {
  // Reset the level, game pattern, and started flag
  level = 0;
  gamePattern = [];
  started = false;
  // Clear the timer
  clearInterval(timerId);
}

// Function to start the timer
function startTimer() {
  // Set the initial time
  var currentTime = timePerLevel;
  // Update the timer display
  document.getElementById('timer').textContent = currentTime;
  // Start the timer
  timerId = setInterval(function () {
    // Decrement the current time
    currentTime--;
    // Update the timer display
    document.getElementById('timer').textContent = currentTime;
    // Check if the time has run out
    if (currentTime <= 0) {
      // Clear the timer
      clearInterval(timerId);
      // End the game due to timeout
      endGameDueToTimeout();
    }
  }, 1000);
}

// Function to end the game due to timeout
function endGameDueToTimeout() {
  // Play the 'wrong' sound
  playSound('wrong');
  // Add the 'game-over' class to the body to indicate game over
  document.body.classList.add('game-over');
  // Update the level title to indicate timeout and restart instructions
  document.getElementById('level-title').textContent = "Time's Up! Press Any Key to Restart";
  // Clear the timer
  clearInterval(timerId);
  // Restart the game
  startOver();
}
