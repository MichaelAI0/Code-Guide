# Fully Documented High Scores Feature for Simon Says Game

**This documentation provides a detailed breakdown of each component involved in adding the High Scores feature to the Simon Says game. Each line of code in HTML, CSS, and JavaScript is explained to illustrate its purpose and function within the feature. The integration of this feature enhances the game by adding a competitive element and encouraging players to achieve higher scores.**

## HTML Documentation

### High Scores Section

Here, a new section in the HTML is added to display the high scores.

```html
<div id="high-score-list"></div>
  <h2>High Scores</h2>
  <ol id="high-scores"></ol>
</div>
```

- `div id="high-score-list"`: This creates a container for the high scores list.
- `h2`: This heading displays the title "High Scores" above the list.
- `ol id="high-scores"`: An ordered list where individual high scores will be dynamically listed.
- `</div>`: Closes the div tag for the high scores container.

## CSS Documentation

### Styling the High Scores

New styles for the high scores section are introduced.

```CSS
#high-score-list {
  margin-top: 20px;
  color: white;
  text-align: center;
}
```

- `margin-top: 20px;`: Adds space above the high scores list.
- `color: white;`: Sets the text color to white.
- `text-align: center;`: Centers the text and list in the middle of the container.

```CSS
#high-scores {
  list-style-type: none;
  padding: 0;
}
```

- `list-style-type: none;`: Removes the default list styling (like bullets).
- `padding: 0;`: Removes default padding from the list.

```CSS
#high-scores li {
  margin-bottom: 5px;
  font-size: 1.2em;
}
```

- `margin-bottom: 5px;`: Adds a small space below each list item for better readability.
- `font-size: 1.2em;`: Increases the font size for better visibility.

## JavaScript Documentation

### Update High Scores

```javascript
// Updates the high scores and stores them in local storage
function updateHighScores(newScore) {
  // Retrieve high scores from local storage or initialize an empty array
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Add the new score to the high scores array
  highScores.push(newScore);

  // Sort the scores in descending order
  highScores.sort((a, b) => b - a);

  // Keep only the top 5 scores
  highScores = highScores.slice(0, 5);

  // Update the high scores in local storage
  localStorage.setItem("highScores", JSON.stringify(highScores));

  // Refresh the display of high scores
  displayHighScores();
}
```

- Declares the function updateHighScores with newScore as a parameter.
- Retrieves high scores from local storage or initializes an empty array if none exist.
- Adds the new score to the array, sorts the array in descending order, and keeps only the top 5 scores.
- Updates the high scores in local storage.
- Calls `displayHighScores` to refresh the displayed high scores, then closes the function.

### Display High Scores

```javascript
// Displays the high scores on the webpage
function displayHighScores() {
  // Retrieve high scores from local storage or initialize an empty array
  let highScores = JSON.parse(localStorage.getItem("highScores")) || [];

  // Select the high scores list element
  const highScoresList = document.getElementById("high-scores");

  // Update the list's HTML with the high scores
  highScoresList.innerHTML = highScores.map((score) => `<li>${score}</li>`).join("");
}
```

- Declares the function `displayHighScores`.
- Fetches the high scores from local storage.
- Selects the `high-scores` element from the HTML document.
- Updates the inner HTML of the high scores list, formatting each score as a list item, then closes the function.

### Integrating High Scores into Game Logic

```javascript
// Modify startOver function to include high score updates
function startOver() {
  // existing code...

  // Update high scores with the final score (assuming 'level - 1' is the score)
  updateHighScores(level - 1);
}
```

- In the `startOver` function, `updateHighScores` is called with the player's final score (assumed to be `level - 1`).

### Initializing High Scores on Page Load

```javascript
// Display high scores when the document is ready
$(document).ready(function () {
  displayHighScores();
});
```

- Utilizes jQuery to execute `displayHighScores` when the document is fully loaded, ensuring the high scores are displayed immediately.

##

# Fully Documented Difficulty Levels Feature for Simon Says Game

**This documentation covers the implementation of the Difficulty Levels feature for the Simon Says game. The feature introduces dynamic speed adjustments based on the player's level, making the game more challenging and engaging as the player progresses. The implementation leverages JavaScript to manage the game's speed and ensure the animations and timings align with the increasing difficulty.**

## Overview

The "Difficulty Levels" feature enhances the Simon Says game by increasing the speed of Simon's sequence as the player progresses to higher levels, adding an extra challenge.

## HTML Documentation

### No additional HTML modifications are needed for this feature.

## CSS Documentation

### No additional CSS modifications are needed for this feature.

## JavaScript Documentation

### Modifications and Additions for Difficulty Levels

1. Add a Variable for Speed

```javascript
// Initial speed of the game
var gameSpeed = 1000; // in milliseconds
```

- `gameSpeed` represents the speed of the game. It starts at 1000 milliseconds (1 second).

2. Modify the nextSequence Function to Adjust Speed

```javascript
function nextSequence() {
  // existing code...

  // Reduce the game speed by 100 milliseconds every 2 levels
  if (level % 2 === 0 && gameSpeed > 500) {
    gameSpeed -= 100;
  }

  // existing code to generate sequence...
}
```

- This modification adjusts the `gameSpeed` by reducing it by 100 milliseconds every 5 levels, making the game faster. The speed won't go below 500 milliseconds to maintain playability.

3. Update the Timing in Animations

```javascript
// In the nextSequence function
for (let i = 0; i < gamePattern.length; i++) {
  setTimeout(function () {
    $("#" + gamePattern[i])
      .fadeOut(gameSpeed / 2)
      .fadeIn(gameSpeed / 2);
  }, gameSpeed * i);
}
```

- Update the timing for the `fadeOut` and `fadeIn` animations and the `setTimeout` delay to use the `gameSpeed` variable. This ensures the speed of the sequence matches the current game speed.

4. Reset Game Speed on Game Over

```javascript
function startOver() {
  // Reset game speed to initial value
  gameSpeed = 1000;

  // existing code...
}
```

- When the game is over and starts over, reset the `gameSpeed` to its initial value.

## Integration and Testing

After implementing these changes, test the game to ensure that the sequence speed increases appropriately as the player advances through the levels. The speed adjustment should make the game progressively more challenging while remaining playable.

##

# Fully Documented Game Timer Feature for Simon Says Game

## HTML Changes

### Adding the Timer Display

```html
<div id="timer-container">
  <h2>Time Left: <span id="timer"></span> seconds</h2>
</div>
```

- Creates a `div` container for the timer display.
- `h2` element displays the text "Time Left:".
- `span id="timer"`: This span will dynamically show the remaining time in seconds.
- Closes the `div` container for the timer.

## CSS Additions

### Styling the Timer

```css
#timer-container {
  margin-top: 20px;
  color: white;
  text-align: center;
  font-size: 1.5em;
}
```

- Styles the timer container (`#timer-container`), setting margin from the top, text color, alignment, and font size.

## JavaScript Modifications and Additions

**With these additions, the Simon Says game will now include a timer for each level, challenging players to complete the sequence within the set time limit. Test the game to ensure the timer works correctly and resets appropriately at the start of each level or when the game restarts.**

### Timer Functionality

You will add new variables and functions to handle the timer feature.

1. Declare New Variables:

```javascript
var timePerLevel = 10; // Time in seconds for each level
var timerId;
```

- Sets the duration for each level in seconds.
- Declares a variable `timerId` to keep track of the timer interval.

2. Start Timer Function:
   This function starts the countdown timer for each level.

```javascript
function startTimer() {
  var currentTime = timePerLevel;
  $("#timer").text(currentTime);

  timerId = setInterval(function () {
    currentTime--;
    $("#timer").text(currentTime);

    if (currentTime <= 0) {
      clearInterval(timerId);
      endGameDueToTimeout();
    }
  }, 1000);
}
```

- Declares a function `startTimer` to handle the countdown timer.
- Initializes `currentTime` with the value from `timePerLevel`.
- Sets the initial time display in the HTML.
- Starts a setInterval timer and assigns it to `timerId`.
- Decreases `currentTime` by 1 each second.
- Updates the timer display in the HTML.
- Checks if `currentTime` has reached 0.
- Stops the timer.
- Calls `endGameDueToTimeout` when time runs out.
- The interval is set to 1000 milliseconds (1 second), then closes the function.

3. End Game Due to Timeout Function:
   This function handles what happens when the time runs out.

```javascript
function endGameDueToTimeout() {
  playSound("wrong");
  $("#level-title").text("Time's Up! Press Any Key to Restart");
  startOver();
}
```

- Declares a function `endGameDueToTimeout` for handling the end of the game due to time running out.
- Plays the "wrong" sound indicating the player has run out of time.
- Updates the level title to indicate that the time is up.
- Calls the `startOver` function to reset the game, then closes the function.

4. Modify Existing Functions:
   Update the `nextSequence` and `startOver` functions to integrate the timer.

```javascript
function nextSequence() {
  // increase the amount of time it takes for the timer to start as the levels increase
  let newInterval = 50;
  newInterval += level * 30;

  // Existing code...

  // End existing code ...

  clearInterval(timerId);
  setTimeout(function () {
    startTimer();
  }, 1000 + level * newInterval);
}
```

- Modifies `nextSequence` to start the timer at the beginning of each new sequence.
- Declares `newInterval` that increases after each level to delay the start of the timer.
- `clearInterval` is called to clear the timer.
- The start of the timer is delayed to give the next sequence time to be displayed to the user.

```javascript
function startOver() {
  clearInterval(timerId); // Stop the timer
  // existing code...
}
```

- Modifies `startOver` to stop the timer when the game is reset.

5. Integrate Timer Start on Game Start:
   In the keypress event handler, ensure the timer starts when the game begins.

```javascript
$(document).keypress(function () {
  if (!started) {
    // existing code...
    startTimer();
  }
});
```

- Modifies the keypress event handler to start the timer when the game begins.
