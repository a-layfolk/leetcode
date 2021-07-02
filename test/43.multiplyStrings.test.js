const { multiply } = require("../src/43.multiplyStrings.js");
const assert = require("assert");

describe(() => {
  it(() => {
    assert.equal(multiply("123", "456"), "56088");
  });
  it(() => {
    assert.equal(multiply("0", "123"), "0");
  });
});