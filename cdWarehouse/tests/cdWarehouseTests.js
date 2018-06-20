const assert = require('assert');
const itParam = require('mocha-param').itParam;
const CD = require('../src/CD');
const Warehouse = require('../src/Warehouse');

const testCDs = [{
	stockCount: 1,
	title: 'Spice World',
	artist: 'Spice Girls',
	userRatings: []
}];

const createdCDs = [];

describe('cdWarehouseTests', function() {
	let warehouse;

	beforeEach(() => {
		testCDs.forEach((item) => {
			createdCDs.push(new CD(item))
		})
		// cd = new CD(testCD);
		warehouse = new Warehouse(createdCDs);
	});

	it('Add new Spice World CD to warehouse', () => {
		assert.equal(1, warehouse.cdList[0].stockCount);
	});

	it('Add another Spice World CD to warehouse', () => {
		warehouse.cdList[0].addStock(1);
		assert.equal(2, warehouse.cdList[0].stockCount);
	});

	it('Search by title: Spice World', () => {
		const title = 'Spice World';
		const matchedCD = warehouse.searchCDsByTitle(title)[0];
		assert.equal(title, matchedCD.title);
	});

	it('Buy a Spice World CD', () => {
		const buyStatus = warehouse.buyCD('Spice World');
		assert.equal(true, buyStatus);
		assert.equal(0, warehouse.cdList[0].stockCount);
	});
});