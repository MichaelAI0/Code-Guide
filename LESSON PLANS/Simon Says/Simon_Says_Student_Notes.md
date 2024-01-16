# Simon Game Documentation

## Overview

This document explains the code for a simple Simon game. Players follow a pattern of lights and sounds and must repeat it. Each time they succeed, the pattern gets longer.

## Files

**index.html:** The HTML file with the game's structure.

**styles.css:** The CSS file for styling.

**game.js:** The JavaScript file with the game's logic.

## HTML File (index.html)

### Structure

- `<head>`: Contains metadata, title, links to the stylesheet, and scripts.
- `<body>`: Main content of the game.
  - `h1` with id level-title: Shows the game level or instructions.
  - `div` with class container: Contains the game buttons.

### Game Buttons

- Four `div` elements with ids: `green`, `red`, `yellow`, `blue`.
- Used to play the game.

## CSS File (styles.css)

### Styling

- `Body`: Dark blue background, centered text.
- `#level-title`: Retro-style font.
- `.container`: Centers buttons in the page.
- `.btn`: Style for game buttons (size, border).
- Colored classes (`red`, `green`, `blue`, `yellow`): Button colors.
- `.pressed`: Shadow effect for pressed button.
- `.game-over`: Red, semi-transparent background for game over.

## JavaScript File (game.js)

### Variables

- `buttonColours`: Array of button color names.
- `gamePattern`: Stores the game's color pattern.
- `userClickedPattern`: Stores the user's button presses.
- `started`: Tracks if the game has started.
- `level`: Current game level.

### Event Listeners

- **Keypress:** To start the game.
- **Button click:** Handles player input.

### Functions

- `checkAnswer()`: Checks user's pattern against game's pattern.
- `nextSequence()`: Generates next color in the pattern.
- `animatePress()`: Animates pressed button.
- `playSound()`: Plays button sound.
- `startOver()`: Resets game for a new start.

### Game Logic

- Game starts with a key press.
- Each level adds a new color to the pattern.
- Follow the pattern correctly to advance.
- Mistakes lead to game over and restart option.

### Additional Notes for Students

- Experiment with the code and see the changes!
- Notice how JavaScript, HTML, and CSS interact.
- Enjoy modifying the game!
