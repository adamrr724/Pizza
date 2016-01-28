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
  console.log("Hi from reveal letters" + this.hiddenWord + " " + this.randomWord);
  return this.hiddenWord.join("");
};

Game.prototype.gameOverCheck = function (bodyPartCount) {
  if(bodyPartCount >= 6) {
    return true;
  }
  return false;
};


$(function() {

  var hangman = new Game();
  console.log("hello from the game " + hangman.randomWord + " " + hangman.hiddenWord);
  $("#display-hidden-word").append(hangman.hiddenWord);


//   $("form#user-input").submit(function(event) {
//     event.preventDefault();
//
//     var userLetter = $(this).find("input#letter-input");
//
//     while(!hangman.gameOverCheck) {
//      hangman.checkword(userLetter)
//      if(hangman.checkWord()) {
//        hangman.revealLetters(userLetter)
//      } else {
//        hangman.bodyPartCount++;
//      }
//    };
//   });
});
