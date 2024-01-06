# Simon Says Game Creation Guide for Absolute Beginners

In this guide, you'll create a Simon Says game from scratch. You don't need any coding experience. We'll cover HTML, CSS, and JavaScript, step by step, with explicit code explanations.

## Step 1: Setting Up Your Project

1. Create a new folder on your computer. Name it "SimonSaysGame."
1. Inside the "SimonSaysGame" folder, create a new text file and name it "index.html."

## Step 2: Creating the HTML Structure

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Simon Says</title>
    <link rel="stylesheet" href="styles.css">
</head>
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
    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous" defer></script>
    <script src="game.js" defer></script>
</body>
</html>
```

### Explanation:

- `<!DOCTYPE html>`: Declares the document type as HTML5.
- `<html lang="en">`: Specifies the language for the document.
- `<head>`: Contains meta-information and external resources.
- `<meta charset="UTF-8">`: Sets the character encoding to UTF-8.
- `<title>`: Sets the title of the game displayed in the browser tab.
- `<link rel="stylesheet" href="styles.css">`: Links to an external CSS file for styling.
- `<body>`: Contains the game content.
- `<h1 id="level-title">`: Displays the game's title.
- `<div class="container">`: Contains the game buttons.
- `<div class="row">`: Represents a row of buttons.
- `<div type="button" id="green" class="btn green"></div>`: Creates a green button.
- Repeat the above line for red, yellow, and blue buttons.
- `<script src="...">`: Loads JavaScript libraries and the game logic file with the defer attribute for asynchronous loading.

## Step 3: Creating the CSS Styles

1. Inside the "SimonSaysGame" folder, create a new text file and name it "styles.css."
1. Open the "styles.css" file with your text editor and add the following CSS code:

```CSS
/* Apply styles to the body of the game */

/* Set the text alignment to the center, aligning game content */
body {
    text-align: center;
    background-color: #011f3f; /* Set the background color to a dark blue */
}

/* Style for the game's title */

/* Use the "Press Start 2P" font for a retro gaming feel */
#level-title {
    font-family: "Press Start 2P", cursive;
    font-size: 3rem; /* Set the font size to 3 rem units (48 pixels) */
    margin: 5%; /* Add 5% margin on all sides to create space */
    color: #fef2bf; /* Set the text color to a light beige */
}

/* Style for the game container */

/* Center the container horizontally with a maximum width of 50% of the viewport */
.container {
    display: block;
    width: 50%;
    margin: auto; /* Center the container horizontally */
}

/* Style for the game buttons */

/* Add space around the buttons and set a specific size and border */
.btn {
    margin: 25px; /* Add 25 pixels of margin around each button */
    display: inline-block; /* Display buttons inline, next to each other */
    height: 150px; /* Set the button height to 150 pixels */
    width: 150px; /* Set the button width to 150 pixels */
    border: 10px solid black; /* Add a 10-pixel black border around the buttons */
    border-radius: 20%; /* Round the corners of the buttons to create a circular shape */
}

/* Style for the red button */

/* Set the background color of the red button to red */
.red {
    background-color: red;
}

/* Style for the blue button */

/* Set the background color of the blue button to blue */
.blue {
    background-color: blue;
}

/* Style for the green button */

/* Set the background color of the green button to green */
.green {
    background-color: green;
}

/* Style for the yellow button */

/* Set the background color of the yellow button to yellow */
.yellow {
    background-color: yellow;
}

/* Style for the pressed button effect */

/* Define styles for a pressed button (to be implemented) */
.pressed {
    box-shadow: 0 0 20px white; /* Add a white box-shadow for a glowing effect */
    background-color: grey; /* Change the background color to grey when pressed */
}
```

### Explanation:

- CSS code defines styles for the game's appearance.
- `body`: Sets the background color and text alignment.
- `#level-title`: Styles the game's title.
- `.container`, `.btn`: Styles the game container and buttons.
- Button color styles (e.g., `.red`, `.green`, `.blue`, `.yellow`) define background colors.
- `.pressed`: Defines the style for the button when it's pressed.

## Step 4: Adding JavaScript Logic

1. Inside the "SimonSaysGame" folder, create a new text file and name it "game.js."
1. Open the "game.js" file with your text editor and add the following JavaScript code:

```Javascript
// Array of button colors
var buttonColours = ["red", "blue", "green", "yellow"];

// Stores the sequence generated by the game
var gamePattern = [];

// Stores the user's clicked pattern
var userClickedPattern = [];

// Tracks if the game has started
var started = false;

// Current level of the game
var level = 0;

// Event listener for a keypress to start the game
$(document).keypress(function () {
    // Check if the game has not started yet
    if (!started) {
        // Update the game title to show the current level
        $("#level-title").text("Level " + level);

        // Generate the first sequence and start the game
        nextSequence();
        started = true;

        // Remove the "game-over" class from the body (if it was previously set)
        $("body").removeClass("game-over");
    }
});

// Event listener for button clicks
$(".btn").click(function () {
    // Check if the game has started
    if (started) {
        // Get the color of the clicked button
        var userChosenColour = $(this).attr("id");

        // Add the user's choice to the clicked pattern
        userClickedPattern.push(userChosenColour);

        // Play the corresponding sound for the button
        playSound(userChosenColour);

        // Animate the button press
        animatePress(userChosenColour);

        // Check if the user's pattern matches the game pattern
        checkAnswer(userClickedPattern.length - 1);
    } else {
        // If the game hasn't started, create a brief visual effect to indicate a wrong click
        $("body").removeClass("game-over");
        setTimeout(function () {
            $("body").addClass("game-over");
        }, 100);
    }
});

// Function to generate the next sequence in the game
function nextSequence() {
    // Reset the user's clicked pattern
    userClickedPattern = [];

    // Increase the level and update the title
    level++;
    $("#level-title").text("Level " + level);

    // Generate a random number to select a color from the buttonColours array
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    // Add the chosen color to the game pattern
    gamePattern.push(randomChosenColour);

    // Animate and display the generated sequence to the user
    animateSequence(gamePattern);
}

// Function to play a sound based on the provided color
function playSound(name) {
    // Create an audio element and set its source to the corresponding sound file
    var audio = new Audio("sounds/" + name + ".mp3");

    // Play the sound
    audio.play();
}

// Function to animate a button press
function animatePress(currentColor) {
    // Add a "pressed" class to the button to create a visual effect
    $("#" + currentColor).addClass("pressed");

    // Remove the "pressed" class after a short delay to revert the visual effect
    setTimeout(function () {
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

// Function to check the user's answer
function checkAnswer(currentLevel) {
    // Check if the user's choice matches the corresponding color in the game pattern
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
        // Check if the user has completed the current sequence
        if (userClickedPattern.length === gamePattern.length) {
            // Delay the start of the next sequence to provide feedback
            setTimeout(function () {
                nextSequence();
            }, 1000);

            // Update the game title to indicate success
            $("#level-title").text("SUCCESS!!");
        }
    } else {
        // Play a "wrong" sound and set the "game-over" class to indicate a mistake
        playSound("wrong");
        $("body").addClass("game-over");

        // Update the game title to indicate the game is over and can be restarted
        $("#level-title").html("<b>Game Over</b><br><br> Press Any Key to Restart");

        // Reset the game to the starting state
        startOver();
    }
}

// Function to reset the game to the starting state
function startOver() {
    // Reset the level, game pattern, and game state
    level = 0;
    gamePattern = [];
    started = false;
}
```

### Explanation:

- JavaScript code controls the game's logic, including generating sequences, handling user input, playing sounds, and checking the user's answers.
- Line comments (e.g., **// Array of button colors**) provide explanations for each section of the code.

## Step 5: Adding Game Sounds

1. Inside the "SimonSaysGame" folder, create a new folder named "sounds."
1. Download four sound files (e.g., red.mp3, blue.mp3, green.mp3, yellow.mp3) and place them inside the "sounds" folder.

## Step 6: Running Your Game

1. Open the "index.html" file in a web browser.
1. Press any key to start the game.
1. Follow the pattern of button colors and try to repeat it.
1. The game will keep track of your progress, and you'll hear sounds for each button press.
1. If you make a mistake, the game will display "Game Over" and allow you to restart.

**Congratulations! You've created a Simon Says game from scratch with detailed instructions and explanations for every step. Enjoy playing your game, and feel free to explore and modify it as you learn more about coding.**
