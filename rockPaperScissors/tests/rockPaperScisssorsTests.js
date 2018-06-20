const assert = require('assert');
const itParam = require('mocha-param').itParam;
const rps = require('../src/rockPaperScissors');

describe('rockPaperScissorsTests', function() {
	/*const data = [["rock","scissors"],["scissors","paper"],["paper", "rock"]];

	itParam('player1Wins', data, (d) => {
		assert.equal(true,rps.player1Wins(d[0], d[1]));
	});

	itParam('player2Wins', data, (d) => {
		assert.equal(false,rps.player1Wins(d[1], d[0]));
	});*/

	it('rock blunt scissors', function() {
		assert.equal('win', rps.player1Wins("rock","scissors"));
		assert.equal('lose', rps.player1Wins("scissors","rock"));
	});

	it('scissors cuts paper', function() {
		assert.equal('win', rps.player1Wins("scissors","paper"));
		assert.equal('lose', rps.player1Wins("paper","scissors"));
	});

	it('paper wraps rock', function() {
		assert.equal('win', rps.player1Wins("paper","rock"));
		assert.equal('lose', rps.player1Wins("rock","paper"));
	});

	it('selected the same', function() {
		assert.equal('draw', rps.player1Wins("paper","paper"));
		assert.equal('draw', rps.player1Wins("rock","rock"));
		assert.equal('draw', rps.player1Wins("scissors","scissors"));
	});

	it('no match', function() {
		let game = new rps.Game();
		assert.equal(0, game.getPlayer1Wins());
		assert.equal(0, game.getPlayer2Wins());
		assert.equals("not-started", game.getStatus());
	});

	it('Player 1 wins 1st round', function() {
		let game = new rps.Game();
		game.playRound("rock","scissors");
		assert.equal(1, game.getPlayer1Wins());
		assert.equal(0, game.getPlayer2Wins());
		assert.equals("in-progress", game.getStatus());
	});

	it('Player 1 wins 2nd round', function() {
		let game = new rps.Game();
		game.playRound("rock","scissors");
		game.playRound("rock","scissors");
		assert.equal(2, game.getPlayer1Wins());
		assert.equal(0, game.getPlayer2Wins());
		assert.equals("won-player1", game.getStatus());
	});
});

/*
Scissor
Paper
Rock
Game
Player
Round
Win
*/