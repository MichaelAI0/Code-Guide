# Simon Says Game - Additional Features Creation Guide

In this guide, you'll learn how to add exciting new features to your Simon Says game. Each feature will enhance your game and provide an opportunity to expand your programming skills.

## Feature 1: Countdown Timer

**This code provides a step-by-step implementation for adding the Countdown Timer feature to your Simon Says game, complete with explicit documentation for each line. Please integrate these code snippets into your existing project to implement this feature.**

### HTML:

1. Add a timer element inside the `<body>` of your HTML file.

`<div id="timer">10</div>`

### JavaScript:

1. Initialize a timer variable at the beginning of your JavaScript file.

```javascript
var countdown = 10; // Initialize the timer with 10 seconds
```

2. Create a function to update the timer element's content.

```javascript
function updateTimer() {
  $("#timer").text(countdown); // Update the timer display with the current countdown value
}
```

3. Start the countdown timer when the game starts.

```javascript
$(document).keypress(function () {
  if (!started) {
    // Check if the game has not started
    $("#level-title").text("Level " + level); // Display the current level
    nextSequence(); // Start the game
    started = true; // Set the game as started
    $("body").removeClass("game-over"); // Remove the "game-over" class from the body

    updateTimer(); // Display the initial time
    // ... (existing code)
  }
});
```

4. Add a timer interval to decrease the timer value every second and check if time is up.

```javascript
var timerInterval; // Initialize a variable to hold the timer interval ID

$(document).keypress(function () {
  if (!started) {
    // ... (existing code)

    timerInterval = setInterval(function () {
      countdown--; // Decrease the countdown by 1 second
      updateTimer(); // Update the timer display

      if (countdown === 0) {
        // Check if time is up
        clearInterval(timerInterval); // Clear the timer interval
        $("#level-title").html("<b>Game Over</b><br><br> Press Any Key to Restart"); // Display game over message
        playSound("wrong"); // Play the wrong sound
        $("body").addClass("game-over"); // Add the "game-over" class to the body
        startOver(); // Reset the game
      }
    }, 1000); // Execute the timer function every 1000 milliseconds (1 second)
    // ... (existing code)
  }
});
```

## Feature 2: Difficulty Levels

**This code provides a step-by-step implementation for adding the Difficulty Levels feature to your Simon Says game, complete with explicit documentation for each line. Please integrate these code snippets into your existing project to implement this feature.**

### HTML:

1. Add a difficulty selection menu inside the `<body>` of your HTML file.

```HTML
<select id="difficulty">
    <option value="easy">Easy</option>
    <option value="medium">Medium</option>
    <option value="hard">Hard</option>
</select>
```

### JavaScript:

1. Initialize a variable to store the selected difficulty level.

```javascript
var selectedDifficulty = "easy"; // Default to "easy" difficulty
```

2. Add an event listener to update the selected difficulty level when it changes.

```javascript
$("#difficulty").change(function () {
  selectedDifficulty = $(this).val(); // Update the selected difficulty based on user's choice
  // Adjust game settings based on the selected difficulty level **(see below)**
});
```

3. Modify your game settings (e.g., sequence speed, pattern length) based on the selected difficulty level within the event listener where game settings are defined.

```javascript
// Example: Adjust game settings based on difficulty level
if (selectedDifficulty === "easy") {
  // Set game settings for easy difficulty
  sequenceSpeed = 1000; // Set a slower sequence speed
  maxPatternLength = 5; // Set a shorter pattern length
} else if (selectedDifficulty === "medium") {
  // Set game settings for medium difficulty
  sequenceSpeed = 800; // Set a medium sequence speed
  maxPatternLength = 7; // Set a medium pattern length
} else if (selectedDifficulty === "hard") {
  // Set game settings for hard difficulty
  sequenceSpeed = 600; // Set a faster sequence speed
  maxPatternLength = 10; // Set a longer pattern length
}
```

## Feature 3: High Score System

**This code provides a step-by-step implementation for adding the High Score System feature to your Simon Says game, complete with explicit documentation for each line. Please integrate these code snippets into your existing project to implement this feature.**

### Javascript

1. Initialize an array to store high scores at the beginning of your JavaScript file.

```javascript
var highScores = []; // Initialize an empty array to store high scores
```

2. Create a function to update and display high scores.

```javascript
function updateHighScores() {
  // Sort high scores in descending order
  highScores.sort(function (a, b) {
    return b.score - a.score;
  });

  // Clear the high score table
  $("#high-scores").empty();

  // Display high scores in the table
  for (var i = 0; i < highScores.length; i++) {
    $("#high-scores").append("<tr><td>" + highScores[i].player + "</td><td>" + highScores[i].score + "</td></tr>");
  }
}
```

3. Call the `updateHighScores` function after each game to update and display high scores.

```javascript
// Example: Update high scores after a game (call this function at the appropriate place in your code)
function updateHighScore(playerName, score) {
  highScores.push({ player: playerName, score: score }); // Add the player's score to the highScores array
  updateHighScores(); // Update and display the high scores
}
```

4. You should call the updateHighScore function after each game to update the high scores.

## Feature 4: Customizable Sound Effects

**This code provides a step-by-step implementation for adding the Customizable Sound Effects feature to your Simon Says game, complete with explicit documentation for each line. Please integrate these code snippets into your existing project to implement this feature.**

### HTML:

1. Add a sound selection menu inside the `<body>` of your HTML file.

```HTML
<select id="sound">
    <option value="sound1">Sound 1</option>
    <option value="sound2">Sound 2</option>
    <option value="sound3">Sound 3</option>
</select>

```

### Javascript

1. Initialize a variable to store the selected sound effect.

```javascript
var selectedSound = "sound1"; // Default to "sound1"
```

2. Add an event listener to update the selected sound effect when it changes.

```javascript
$("#sound").change(function () {
  selectedSound = $(this).val(); // Update the selected sound effect based on user's choice
});
```

3. Modify your button click event listener to load and play the selected sound effect.

```javascript
$(".btn").click(function () {
  var audio = new Audio("sounds/" + selectedSound + ".mp3"); // Create an Audio object with the selected sound
  audio.play(); // Play the selected sound
  // ... (existing code)
});
```

## Feature 5: Pause and Resume

**This code provides a step-by-step implementation for adding the "Pause and Resume" feature to your Simon Says game, complete with explicit documentation for each line. Please integrate these code snippets into your existing project to implement this feature.**

### HTML:

1. Add "Pause" and "Resume" buttons inside the `<body>` of your HTML file.

```HTML
<button id="pause-button">Pause</button>
<button id="resume-button">Resume</button>

```

### Javascript

1. Initialize a variable to track if the game is paused.

```javascript
var gamePaused = false; // Initialize a variable to track if the game is paused
```

2. Add event listeners for the "Pause" and "Resume" buttons.

```javascript
// Add event listener for the "Pause" button
$("#pause-button").click(function () {
  if (!gamePaused) {
    // Check if the game is not already paused
    gamePaused = true; // Set the game as paused
    pauseGame(); // Call the pauseGame function to implement pause logic
  }
});

// Add event listener for the "Resume" button
$("#resume-button").click(function () {
  if (gamePaused) {
    // Check if the game is paused
    gamePaused = false; // Set the game as not paused
    resumeGame(); // Call the resumeGame function to implement resume logic
  }
});
```

3. Implement the pause and resume logic inside functions `pauseGame()` and `resumeGame()` as needed for your game.

```javascript
// Function to pause the game
function pauseGame() {
  // Implement pause logic here (e.g., pause timers and animations)
  clearInterval(timerInterval); // Clear the timer interval
  $(".btn").prop("disabled", true); // Disable button clicks
}

// Function to resume the game
function resumeGame() {
  // Implement resume logic here (e.g., resume timers and animations)
  timerInterval = setInterval(function () {
    countdown--;
    updateTimer();

    if (countdown === 0) {
      clearInterval(timerInterval);
      $("#level-title").html("<b>Game Over</b><br><br> Press Any Key to Restart");
      playSound("wrong");
      $("body").addClass("game-over");
      startOver();
    }
  }, 1000);
  $(".btn").prop("disabled", false); // Enable button clicks
}
```

4. In the `pauseGame()` and `resumeGame()` functions, you can implement logic to pause and resume any timers, animations, or gameplay elements specific to your game.
