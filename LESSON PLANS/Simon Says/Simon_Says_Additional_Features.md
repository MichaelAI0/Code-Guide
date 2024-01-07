# Fully Documented High Scores Feature for Simon Says Game

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
