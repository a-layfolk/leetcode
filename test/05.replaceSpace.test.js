const { replaceSpace } = require("../src/05.replaceSpace.js");
const assert = require("assert");

describe("test replaceSace", () => {
  it("Hello World", () => {
    assert.equal(replaceSpace("Hello World"), "Hello%20World");
  });
  it("How old are you", () => {
    assert.equal(replaceSpace("How old are you"), "How%20old%20are%20you");
  });
});