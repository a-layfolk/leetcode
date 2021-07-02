/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
  var num1 = num1.split("").reverse();
  var len1 = num1.length;
  var num2 = num2.split("").reverse();
  var len2 = num2.length;
  var res = new Array(len1 + len2).fill(0);
  for (var j = 0; j < len2; j++) {
    for (var i = 0; i < len1; i++) {
      res[i + j] = res[i + j] + num1[i] * num2[j];
    }
    var k = 0;
    do {
      var carry = Math.floor(res[k] / 10);
      res[k] = res[k] % 10;
      res[k + 1] = res[k + 1] + carry;
      k++;
    } while( k < len1 + len2 - 1);
  }
  while (res.length > 1 && res[res.length - 1] === 0) {
    res.pop();
  }
  return res.reverse().join("");
};

module.exports = {
  multiply,
};