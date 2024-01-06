# Simon Says Game CSS Code Walkthrough

In this walkthrough, we will explore the CSS code (`styles.css`) responsible for styling the Simon Says game. The CSS code defines the visual layout and appearance of the game elements.

## CSS Styles

```css
/* Apply styles to the body of the game */
body {
  text-align: center;
  background-color: #011f3f;
}

/* Style for the game's title */
#level-title {
  font-family: "Press Start 2P", cursive;
  font-size: 3rem;
  margin: 5%;
  color: #fef2bf;
}

/* Style for the game container */
.container {
  display: block;
  width: 50%;
  margin: auto;
}

/* Style for the game buttons */
.btn {
  margin: 25px;
  display: inline-block;
  height: 150px;
  width: 150px;
  border: 10px solid black;
  border-radius: 20%;
}

/* Style for the game-over message */
.game-over {
  background-color: red;
  opacity: 0.8;
}

/* Individual button styles by color */
.red {
  background-color: red;
}

.green {
  background-color: green;
}

.blue {
  background-color: blue;
}

.yellow {
  background-color: yellow;
}

/* Button pressed effect */
.pressed {
  box-shadow: 0 0 20px white;
  background-color: grey;
}
```

- The CSS code provides styling for various game elements such as the background, title, buttons, and game-over message.
- Classes like `.btn`, `.game-over`, and others are used to select and style specific elements in the HTML.
- The styles include custom fonts, colors, margins, padding, and border properties.

**This CSS code is responsible for creating the visual design and layout of the Simon Says game, making it visually appealing and engaging for players.**
