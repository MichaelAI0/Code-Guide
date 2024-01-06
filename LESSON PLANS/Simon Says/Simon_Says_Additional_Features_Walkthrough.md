# Simon Says Game - Additional Features Creation Guide

In this guide, you'll learn how to add exciting new features to your Simon Says game. Each feature will enhance your game and provide an opportunity to expand your programming skills.

## Feature 1: Countdown Timer

**Purpose:** Add a countdown timer for each level to increase the challenge.

### Implementation:

1. HTML:

- Create an HTML element to display the timer.
  ```HTML
  <div id="timer">10</div>
  ```

2. JavaScript:

- Initialize a timer variable (e.g., `var countdown = 10;`) to set the initial time.
- Use setInterval to decrease the timer value every second.
- Update the timer element's content with the remaining time.

```javascript
// Update the timer element's content
function updateTimer() {
  $("#timer").text(countdown);
}

// Start the countdown timer
var timerInterval = setInterval(function () {
  countdown--;
  updateTimer();

  // Check if time is up
  if (countdown === 0) {
    clearInterval(timerInterval);
    // Implement game over logic here
  }
}, 1000);
```
