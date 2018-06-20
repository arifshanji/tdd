const assert = require('assert');
const itParam = require('mocha-param').itParam;
const fc = require('../src/fibonacciCalculator');

describe('fibonacciCalculatorTests', function() {
	const data = [[0,0],[1,1]];
	const data2 = [[1,2],[2,3],[3,4],[12586269025,50]];

	itParam('firstTwoNumbersSameAsIndex', data, (d) => {
    	assert.equal(d[0], fc.calculate(d[1]));
	});

	itParam('subsequentNumbersAreSumOfPreviousTwo', data2, (d) => {
    	assert.equal(d[0], fc.calculate(d[1]));
	});
});