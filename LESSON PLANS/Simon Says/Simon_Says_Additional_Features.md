# Fully Documented High Scores Feature for Simon Says Game

**This documentation provides a detailed breakdown of each component involved in adding the High Scores feature to the Simon Says game. Each line of code in HTML, CSS, and JavaScript is explained to illustrate its purpose and function within the feature. The integration of this feature enhances the game by adding a competitive element and encouraging players to achieve higher scores.**

## HTML Documentation

### High Scores Section

```HTML
<div id="high-score-list">
  <!-- Section heading for High Scores -->
  <h2>High Scores</h2>
  <!-- Ordered list to display high scores -->
  <ol id="high-scores"></ol>
</div>
```

- `<div id="high-score-list">`: Container for the high scores list.
- `<h2>High Scores</h2>`: Title for the high scores section.
- `<ol id="high-scores">`: Ordered list where high scores will be dynamically inserted.

## CSS Documentation

### Styling the High Scores

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

### Integrating High Scores into Game Logic

```javascript
// Modify startOver function to include high score updates
function startOver() {
  // existing code...

  // Update high scores with the final score (assuming 'level - 1' is the score)
  updateHighScores(level - 1);
}
```

### Initializing High Scores on Page Load

```javascript
// Display high scores when the document is ready
$(document).ready(function () {
  displayHighScores();
});
```
