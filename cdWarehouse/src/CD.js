class CD {
	constructor(cd) {
		this.stockCount = cd.stockCount;
		this.title = cd.title;
		this.artist = cd.artist;
		this.userRatings = cd.userRatings;
	}
	addStock(stockNumber) {
		this.stockCount += stockNumber;
	}
	removeStock(stockNumber) {
		this.stockCount -= stockNumber;
	}
}

module.exports = CD;