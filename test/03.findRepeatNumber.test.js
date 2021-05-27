var { findRepeatNumber } = require("../src/03.findRepeatNumber.js");
var assert = require("assert");

describe("test math.js", function () {
  describe("test add", function () {
    it("[1,2,1,4,5]", function() {
      assert.equal(findRepeatNumber([1, 2, 1, 4, 5]), 1);
    })
    it("[1,2,3,4,4]", function() {
      assert.equal(findRepeatNumber([1, 2, 3, 4, 4]), 4);
    })
  });
});
