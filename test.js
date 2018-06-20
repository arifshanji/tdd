var assert = require('assert');
var JsMock = require('js-mock');

var mockFunc = JsMock.mock("nameOfFunction");

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function(){
      assert.equal(-1, [1,2,3].indexOf(4));
    });

    it('func test', function() {
      assert.equal(typeof(mockFunc),'function');
    });
  });
});
