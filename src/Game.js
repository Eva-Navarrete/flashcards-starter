const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Round = require('../src/Round');
const Card = require('../src/Card');
const Deck = require('../src/Deck');

class Game {
  constructor() {
    this.currentRound;
  }

  start() {
    const newCard = prototypeQuestions.map(question => {
    return new Card(question.id, question.question, question.answers, question.correctAnswer);
  })
    const newDeck = new Deck(newCard);
    this.currentRound = new Round(newDeck);
    this.printMessage(newDeck, this.currentRound);
    this.printQuestion(this.currentRound);
  }

  printMessage(deck, round) {
      console.log( `-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
      -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
      |*|                                                                  |*|
      |*|                                                                  |*|
      |*|      Welcome to Flashcards! You are playing with ${deck.countCards()} cards.       |*|
      |*|                                                                  |*|
      |*|                                                                  |*|
      -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
      -*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*
`)
  }

  printQuestion(round) {
      util.main(round);
  }
}

module.exports = Game;
