var buttonColours = ['red', 'blue', 'green', 'yellow'];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

document.addEventListener('keypress', function () {
  if (!started) {
    document.getElementById('level-title').textContent = 'Level ' + level;
    nextSequence();
    started = true;
    document.body.classList.remove('game-over');
  }
});

document.querySelectorAll('.btn').forEach(function (btn) {
  btn.addEventListener('click', function () {
    if (started) {
      var userChosenColour = this.id;
      userClickedPattern.push(userChosenColour);

      playSound(userChosenColour);
      animatePress(userChosenColour);

      checkAnswer(userClickedPattern.length - 1);
    } else {
      document.body.classList.remove('game-over');
      setTimeout(function () {
        document.body.classList.add('game-over');
      }, 100);
    }
  });
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
      document.getElementById('level-title').textContent = 'SUCCESS!!';
    }
  } else {
    playSound('wrong');
    document.body.classList.add('game-over');
    document.getElementById('level-title').innerHTML = '<b>Game Over</b><br><br> Press Any Key to Restart';

    startOver();
  }
}

function nextSequence() {
  userClickedPattern = [];
  level++;
  document.getElementById('level-title').textContent = 'Level ' + level;
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  for (let i = 0; i < gamePattern.length; i++) {
    setTimeout(function () {
      document.getElementById(gamePattern[i]).style.opacity = 0;
      setTimeout(function () {
        document.getElementById(gamePattern[i]).style.opacity = 1;
      }, 100);
    }, 500 * i);
  }
  console.log('gamePattern:', gamePattern);
}

function animatePress(currentColor) {
  var element = document.getElementById(currentColor);
  element.classList.add('pressed');
  setTimeout(function () {
    element.classList.remove('pressed');
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
