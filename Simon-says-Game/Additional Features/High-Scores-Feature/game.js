var buttonColours = ['red', 'blue', 'green', 'yellow'];
var gamePattern = [];
var userClickedPattern = [];
var started = false;
var level = 0;

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
    }
  } else {
    playSound('wrong');
    $('body').addClass('game-over');
    $('#level-title').html('<b>Game Over</b><br><br> Press Any Key to Restart');
    updateHighScores(level - 1);
    startOver();
  }
}

function nextSequence() {
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
}

// High Scores Feature
function updateHighScores(newScore) {
  let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  highScores.push(newScore);
  highScores.sort((a, b) => b - a);
  highScores = highScores.slice(0, 5); // Keep only top 5 scores
  localStorage.setItem('highScores', JSON.stringify(highScores));
  displayHighScores();
}

function displayHighScores() {
  let highScores = JSON.parse(localStorage.getItem('highScores')) || [];
  const highScoresList = document.getElementById('high-scores');
  highScoresList.innerHTML = highScores.map((score) => `<li>${score}</li>`).join('');
}

$(document).ready(function () {
  displayHighScores();
});
