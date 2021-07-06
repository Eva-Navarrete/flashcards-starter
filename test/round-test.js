const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Round = require('../src/Round');

describe('Round', () => {
  let card1, card2, card3, deck, round;

  beforeEach(() => {
     card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
     card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
     card3 = new Card(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

     deck = new Deck([card1, card2, card3]);

     round = new Round(deck);
  });

  it('Should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('Should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
    // console.log(round);
  });

  it('Should default to 0 turns', () => {
    expect(round.turns).to.equal(0);
  });

  it('Should start with no incorrect guesses', () => {
    expect(round.incorrectGuesses).to.deep.equal([]);

  })

  it('Should return current card in the deck', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
    // console.log('curr card',round.returnCurrentCard());
  });

  it('should be able to take a turn', () => {
    expect(round.takeTurn('sea otter')).to.equal(1);
  })







});
