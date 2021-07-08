const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Game = require('../src/Game');

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('Should instantiate a Game', () => {
    expect(game).to.be.an.instanceOf(Game)
  });

  it('Should instantiate a round', () => {
    game.start()
    expect(game.currentRound).to.be.an.instanceof(Round);
  })
})
