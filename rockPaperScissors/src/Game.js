class Game {
	constructor() {
		this.player1wins = 0;
		this.player2wins = 0;
		this.rounds = 0;
	}
	getPlayer1Wins() {
		return this.player1wins;
	}
	getPlayer2Wins() {
		return this.player2wins;
	}
	getStatus() {
		if (this.rounds === 0) {
			return "not-started";
		} else if (this.rounds === 1) {
			return "in-progress";
		} 
	}
}