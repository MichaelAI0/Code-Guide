# The Simon Game Application

## Overview

The Simon game is an electronic game of memory skill. This web version replicates the classic game, challenging players to remember and replicate sequences of colors and sounds.

## HTML Documentation for Simon Game

### Document Structure and Metadata

```html
<!DOCTYPE html>
<html lang="en" dir="ltr"></html>
```

Declares the HTML version and sets language and text direction.

### Head Section

```html
<head>
  <meta charset="utf-8" />
  <title>Simon</title>
  <link rel="stylesheet" href="styles.css" />
  <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
  <script src="./game.js" defer></script>
</head>
```

Includes metadata, the document title, links to the CSS stylesheet and Google Fonts, and the game's JavaScript file with deferred loading.

### Body Section

```html
<body>
  <h1 id="level-title">Press A Key to Start</h1>
  <div class="container">
    <div class="row">
      <div type="button" id="green" class="btn green"></div>
      <div type="button" id="red" class="btn red"></div>
    </div>
    <div class="row">
      <div type="button" id="yellow" class="btn yellow"></div>
      <div type="button" id="blue" class="btn blue"></div>
    </div>
  </div>
</body>
</html>
```

Describes the game's layout, including the start message and interactive game buttons arranged in a visually organized manner.

This documentation delves into the HTML elements that structure the Simon game, explaining their roles and attributes for clarity and functionality.

## CSS Styling Details for Simon Game

### Body and Background

```css
body {
  text-align: center;
  background-color: #011f3f;
}
```

Centers content and applies a dark blue background for visual appeal.

### Level Title

```css
#level-title {
  font-family: 'Press Start 2P', cursive;
  font-size: 3rem;
  margin: 5%;
  color: #fef2bf;
}
```

Uses a retro font for the title, enhancing the game's thematic feel.

### Button Styling

```css
.btn {
  margin: 25px;
  display: inline-block;
  height: 150px;
  width: 150px;
  border: 10px solid black;
  border-radius: 20%;
}
```

Defines button appearance, including size, margin, and rounded borders.

### Interaction Feedback

```css
.game-over {
  background-color: red;
  opacity: 0.8;
}
.pressed {
  box-shadow: 0 0 20px white;
  background-color: grey;
}
```

Visual feedback for game over and button press actions.

## JavaScript Functionality for Simon Game

### Initialization Variables

```javascript
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
```

- `gamePattern`: Stores the sequence of colors.
- `userClickedPattern`: Records the player's sequence attempts.
- `started`: Indicates if the game has begun.
- `level`: Tracks the current game level.

### Event Listeners

```javascript
document.addEventListener('keypress', function () {
  if (!started) {
    nextSequence();
    started = true;
  }
});
```

Starts the game on any key press if not already started.

```javascript
document.querySelectorAll('.btn').forEach((btn) => {
  btn.addEventListener('click', function () {
    var userChosenColour = this.id;
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  });
});
```

Handles button clicks, playing sounds, animating presses, and checking the answer.

### Game Logic Functions

```javascript
function nextSequence() {
  userClickedPattern = [];
  level++;
  // Update level and sequence logic here
}
```

Generates the next sequence, increments the level, and updates the display.

```javascript
function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}
```

Plays a sound associated with each color/button.

```javascript
function animatePress(currentColor) {
  // Animation logic for button press
}
```

Animates a button press for visual feedback.

```javascript
function checkAnswer(currentLevel) {
  // Checks the player's answer against the game sequence
}
```

Validates the player's input, advancing the game or triggering a game over.

```javascript
function startOver() {
  // Resets the game for a new start
}
```

Resets game variables for a new round after a loss.

This documentation details each JavaScript function's role in the Simon game, explaining their contribution to game logic and interactivity.
