function Game() {
  this.randomWord = []; //this.genRandWord();
  this.hiddenWord = []; //this.genHiddenWord();
  this.bodyPartCount = 0;

  this.randomWord = this.genRandWord();
  this.hiddenWord = this.genHiddenWord();

}

Game.prototype.genRandWord = function () {
  var words = ["rooster", "cow", "bobsled", "why", "qat", "saucer", "gnome", "potato", "summer", "staple"];
    var randomWord = words[Math.floor(Math.random() * 10)];
  return randomWord;
};

Game.prototype.genHiddenWord = function () {
  for(var i = 0; i < this.randomWord.length; i++) {
    this.hiddenWord.push("-");
  };
  return this.hiddenWord;
};

Game.prototype.checkWord = function (userLetter) {
  for(var i = 0; i < this.randomWord.length; i++) {
    if(this.randomWord[i] === userLetter) {
      return true;
    }
  }
  return false;
};

Game.prototype.revealLetters = function (userLetter) {
  // debugger;
  for(var i = 0; i < this.randomWord.length; i++) {
    if(this.randomWord[i] === userLetter) {
      this.hiddenWord[i] = userLetter;
    }
  }
  console.log("Hi from reveal letters" + this.hiddenWord.join("") + " " + this.randomWord);
  return this.hiddenWord.join("");
};

Game.prototype.gameOverCheck = function () {
  if(this.bodyPartCount >= 5) {
    return true;
  }
  return false;
};


$(function() {

  var hangman = new Game();
  console.log("hello from the game " + hangman.randomWord + " " + hangman.hiddenWord);
  $("#display-hidden-word").append(hangman.hiddenWord);


  $("form#user-input").submit(function(event) {
    event.preventDefault();

    var userLetter = $("input#letter-input").val();

    if(!hangman.gameOverCheck()) {
     if (hangman.hiddenWord.join("") === hangman.randomWord) {
       $("#game-over-message").text("YOU WIN");
     } else if (hangman.checkWord(userLetter)) {
       hangman.revealLetters(userLetter);
       $("#display-hidden-word").text(hangman.hiddenWord.join(""));
     } else {
       hangman.bodyPartCount++;
     };
     console.log("body part count is: " + hangman.bodyPartCount);
     $("input#letter-input").val("");
   } else $("#game-over-message").text("GAME OVER DUDE");
 });
});
