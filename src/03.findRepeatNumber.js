var findRepeatNumber = function findRepeatNumber(nums) {
  let map = new Map();
  for(item of nums) {
    if(map.get(item) !== undefined) {
      return item;
    }
    map.set(item, item);
  }
};

module.exports = {
  findRepeatNumber
};