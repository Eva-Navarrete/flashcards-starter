const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.currentCard = deck.cards[0];
    this.turns = 0;
    this.incorrectGuesses = [];
    this.correctGuesses = 0;
    this.startTime = Date.now();

  }

  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    const card = this.currentCard;
    const turn = new Turn(guess, card);
    this.guess = turn;
    this.turns++;
    this.currentCard = this.deck.cards[this.turns];
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(card.id);
    } else {
      this.correctGuesses += 1;
    }

    this.returnCurrentCard();
    return turn.giveFeedback();
  }

  calculatePercentCorrect() {
    return (this.turns - this.incorrectGuesses.length) / this.turns * 100;

  }

  setGameTime() {
    let milliseconds = (Date.now() - this.startTime);
    let seconds = Math.round((milliseconds / 1000) % 60);
    (seconds < 10) ? seconds = `0${seconds}` : seconds;
    let minutes = Math.round(milliseconds / 60000);
    let totalTime;
    (minutes === 1) ? totalTime = `1:${seconds}` : totalTime = `${minutes}:${seconds}`;
    return totalTime;
  }

  endRound() {
    let time = this.setGameTime();
    console.log(`** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!  Round time: ${time}!`);
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly! Round time: ${time}!`;
  }

}



module.exports = Round;
