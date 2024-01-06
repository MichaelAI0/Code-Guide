# Simon Says Game - Additional Features Creation Guide

In this guide, you'll learn how to add exciting new features to your Simon Says game. Each feature will enhance your game and provide an opportunity to expand your programming skills.

## Feature 1: Countdown Timer

### HTML:

1. Add a timer element inside the `<body>` of your HTML file.

**html**

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

**This code provides a step-by-step implementation for adding the Countdown Timer feature to your Simon Says game, complete with explicit documentation for each line. Please integrate these code snippets into your existing project to implement this feature.**

## Feature 2: Difficulty Levels

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

**This code provides a step-by-step implementation for adding the Difficulty Levels feature to your Simon Says game, complete with explicit documentation for each line. Please integrate these code snippets into your existing project to implement this feature.**
