class Warehouse {
	constructor(cdList, payment) {
		this.cdList = cdList;
	}
	searchCDsByTitle(title) {
		return this.cdList.map((item) => {
			if (item.title === title) return item;
		});
	}
	buyCD(title) {
		const cdToBuy = this.searchCDsByTitle(title)[0];

		// payment.pay()

		cdToBuy.removeStock(1);
		return true;
	}
}

module.exports = Warehouse;