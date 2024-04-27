// Define an array of button colors
var buttonColours = ['red', 'blue', 'green', 'yellow'];

// Initialize an empty array to store the game pattern
var gamePattern = [];

// Initialize an empty array to store the user's clicked pattern
var userClickedPattern = [];

// Initialize a variable to track if the game has started
var started = false;

// Initialize the level of the game
var level = 0;

// Add an event listener for keypress
document.addEventListener('keypress', function () {
  // Check if the game has not started
  if (!started) {
    // Update the level title with the current level
    document.getElementById('level-title').textContent = 'Level ' + level;

    // Generate the next sequence of the game
    nextSequence();

    // Set the game as started
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

      // Play the sound associated with the clicked color
      playSound(userChosenColour);

      // Animate the button press
      animatePress(userChosenColour);

      // Check if the user's pattern is correct
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

// Function to check if the user's pattern is correct
function checkAnswer(currentLevel) {
  // Check if the current color in the game pattern matches the current color in the user's clicked pattern
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    // Check if the user has completed the current level
    if (userClickedPattern.length === gamePattern.length) {
      // Wait for a second and then generate the next sequence
      setTimeout(function () {
        nextSequence();
      }, 1000);

      // Update the level title with a success message
      document.getElementById('level-title').textContent = 'SUCCESS!!';
    }
  } else {
    // If the user's pattern is incorrect, play the 'wrong' sound, add the 'game-over' class to the body, update the level title, update the high scores, and start over
    playSound('wrong');
    document.body.classList.add('game-over');
    document.getElementById('level-title').innerHTML = '<b>Game Over</b><br><br> Press Any Key to Restart';
    updateHighScores(level - 1);
    startOver();
  }
}

// Function to generate the next sequence of the game
function nextSequence() {
  // Reset the user's clicked pattern
  userClickedPattern = [];

  // Increment the level
  level++;

  // Update the level title with the current level
  document.getElementById('level-title').textContent = 'Level ' + level;

  // Generate a random number between 0 and 3
  var randomNumber = Math.floor(Math.random() * 4);

  // Get a random color from the button colors array
  var randomChosenColour = buttonColours[randomNumber];

  // Add the random color to the game pattern
  gamePattern.push(randomChosenColour);

  // Loop through the game pattern and animate the buttons
  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(function () {
      // Fade out and fade in the button
      var button = document.getElementById(gamePattern[i]);
      button.style.opacity = 0;
      setTimeout(function () {
        button.style.opacity = 1;
      }, 100);
    }, 500 * i);
  }

  // Log the game pattern to the console
  console.log('gamePattern:', gamePattern);
}

// Function to animate the button press
function animatePress(currentColor) {
  // Add the 'pressed' class to the button
  document.getElementById(currentColor).classList.add('pressed');

  // Remove the 'pressed' class after 100 milliseconds
  setTimeout(function () {
    document.getElementById(currentColor).classList.remove('pressed');
  }, 100);
}

// Function to play a sound
function playSound(name) {
  // Create an audio element with the sound file path
  var audio = new Audio('sounds/' + name + '.mp3');

  // Play the audio
  audio.play();
}

// Function to start the game over
function startOver() {
  // Reset the level, game pattern, and started variables
  level = 0;
  gamePattern = [];
  started = false;
}

// High Scores Feature

// Function to update the high scores
function updateHighScores(newScore) {
  // Get the high scores from local storage or initialize an empty array
  let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Add the new score to the high scores array
  highScores.push(newScore);

  // Sort the high scores in descending order
  highScores.sort((a, b) => b - a);

  // Keep only the top 5 scores
  highScores = highScores.slice(0, 5);

  // Store the updated high scores in local storage
  localStorage.setItem('highScores', JSON.stringify(highScores));

  // Display the high scores
  displayHighScores();
}

// Function to display the high scores
function displayHighScores() {
  // Get the high scores from local storage or initialize an empty array
  let highScores = JSON.parse(localStorage.getItem('highScores')) || [];

  // Get the high scores list element
  const highScoresList = document.getElementById('high-scores');

  // Generate the HTML for the high scores list
  highScoresList.innerHTML = highScores.map((score) => `<li>${score}</li>`).join('');
}

// Add an event listener for DOMContentLoaded to display the high scores when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
  displayHighScores();
});
