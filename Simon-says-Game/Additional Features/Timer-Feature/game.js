var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;
var timePerLevel = 10; // Time in seconds for each level
var timerId;

$(document).keypress(function () {
  if (!started) {
    $('#level-title').text('Level ' + level);
    nextSequence();
    started = true;
    $('body').removeClass('game-over');
  }
});

$('.btn').click(function () {
  if (started) {
    var userChosenColour = $(this).attr('id');
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
  } else {
    $('body').removeClass('game-over');
    setTimeout(function () {
      $('body').addClass('game-over');
    }, 100);
  }
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      $('#level-title').text('SUCCESS!!');
      clearInterval(timerId);
    }
  } else {
    playSound('wrong');
    $('body').addClass('game-over');
    $('#level-title').html('<b>Game Over</b><br><br> Press Any Key to Restart');
    startOver();
  }
}

function nextSequence() {
  // increase the amount of time it takes for the timer to start as the levels increase
  let newInterval = 50;
  newInterval += level * 30;
  userClickedPattern = [];
  level++;
  $('#level-title').text('Level ' + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(function () {
      $('#' + gamePattern[i])
        .fadeOut(100)
        .fadeIn(100);
    }, 500 * i);
  }
  clearInterval(timerId);
  setTimeout(function () {
    startTimer();
  }, 1000 + level * newInterval);
  console.log('gamePattern:', gamePattern);
}

function animatePress(currentColor) {
  $('#' + currentColor).addClass('pressed');
  setTimeout(function () {
    $('#' + currentColor).removeClass('pressed');
  }, 100);
}

function playSound(name) {
  var audio = new Audio('sounds/' + name + '.mp3');
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
  clearInterval(timerId);
}

function startTimer() {
  var currentTime = timePerLevel;
  $('#timer').text(currentTime);
  timerId = setInterval(function () {
    currentTime--;
    $('#timer').text(currentTime);
    if (currentTime <= 0) {
      clearInterval(timerId);
      endGameDueToTimeout();
    }
  }, 1000);
}

function endGameDueToTimeout() {
  playSound('wrong');
  $('body').addClass('game-over');
  $('#level-title').text("Time's Up! Press Any Key to Restart");
  clearInterval(timerId);
  startOver();
}
