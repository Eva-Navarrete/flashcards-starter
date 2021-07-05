const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', () => {
  let card, turn;

  beforeEach(() => {
    card = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    turn = new Turn('user guess', card);
  });

  it('Should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('Should be an instance of Turn', () => {
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('Should store user\'s guess', () => {
    expect(turn.guess).to.equal('user guess');
  });

  it('Should store a card object for current card', () => {
    expect(turn.card).to.be.an.instanceof(Card);
  });

  it('Should return users guess', () => {
    expect(turn.returnGuess()).to.equal('user guess');
  });

  it('Should return current card', () => {
    expect(turn.returnCard()).to.be.an.instanceof(Card);
  });

  it('Should evaluate if guess is incorrect', () => {
    expect(turn.evaluateGuess()).to.equal(false);
  });

  it('Should evaluate if guess is correct', () => {
    const turn1 = new Turn('sea otter', card);
    expect(turn1.evaluateGuess()).to.equal(true);
  });

  it('Should give feedback if guess is incorrect', () =>{
    expect(turn.giveFeedback()).to.equal('incorrect!');
  });

  it('Should give feedback if guess is correct', () => {
    const turn1 = new Turn('sea otter', card);
    expect(turn1.giveFeedback()).to.equal('correct!');
  });



})
