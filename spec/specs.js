var testGame = new Game();
  testGame.randomWord = "canada";

describe('Game', function() {
  it("will have a property of a set word", function() {
    expect(testGame.randomWord).to.be.a('string');
  });

  it("will return a random word", function() {
    expect(testGame.genRandWord()).to.be.a('string');
  });

  it("will display a - for each letter in randomWord", function() {
    expect(testGame.genHiddenWord()).to.be.a('array');
  });

  it("will return true if letter is in word", function() {
    expect(testGame.checkWord("a")).to.equal(true);
  });

  it("will return false if user letter is NOT in word", function() {
    expect(testGame.checkWord("z")).to.equal(false);
  });

  it("will return a '-' where the user letter matches randomWord", function() {
    expect(testGame.revealLetters("a")).to.eql("-a-a-a");
  });

  it("will return true if bodyPartcount is 6 or higher", function() {
    expect(testGame.gameOverCheck(6)).to.equal(true);
  });

  it("will return true if bodyPartcount is less than 6", function() {
    expect(testGame.gameOverCheck(0)).to.equal(false);
  })
});
