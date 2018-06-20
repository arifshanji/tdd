module.exports = {
	player1Wins : function player1Wins(	player1Choice, player2Choice ) {
		if (player1Choice === 'rock' && player2Choice === 'scissors' ) {
			return 'win';
		}
		if (player1Choice === 'scissors' && player2Choice === 'paper' ) {
			return 'win';
		}
		if (player1Choice === 'paper' && player2Choice === 'rock' ) {
			return 'win';
		}
		if (player1Choice === player2Choice ) {
			return 'draw';
		}
		return 'lose';
	},
	game : function() {
		let player1wins = 0;
		let player2wins = 0;

		
	}
}