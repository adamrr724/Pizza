function Game() {
  this.randomWord = "canada"; //this.genRandWord();
  this.hiddenWord = [];

}

Game.prototype.genRandWord = function () {
  var words = ["rooster", "cow", "bobsled", "why", "qat", "saucer", "gnome", "potato", "summer", "staple"];
    var randomWord = words[Math.floor(Math.random() * 10)];
    console.log(randomWord);
  return randomWord;
};

Game.prototype.genHiddenWord = function () {
  for(var i = 0; i < this.randomWord.length; i++) {
    this.hiddenWord.push("-");
  };
  console.log("Hi from genHiddenWord func" + this.hiddenWord);
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


// $(function() {
//
  // var hangman = new Game();
//   console.log(hangman.hiddenWord);
  // $("#display-hidden-word").append(hangman.hiddenWord);
//
//
//   $("form#user-input").submit(function(event) {
//     event.preventDefault();
//
//     var userLetter = $(this).find("input#letter-input");
//
//     while(bodyPartcount < 6)
//      hangman.checkword(userLetter)
//      if(hangman.checkWord()) {
//        hangman.revealLetters(userLetter)
//      } else {
//        bodyPartcount++;
//      }
//
//   });
// });
