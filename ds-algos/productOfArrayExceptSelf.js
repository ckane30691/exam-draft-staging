/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const output = new Array(nums.length).fill(1);
  let prefixes = 1;
  for (let i = 1; i < nums.length; ++i) {
    prefixes *= nums[i - 1];
    output[i] *= prefixes;
  }
  let suffixes = 1;
  for (let i = nums.length - 2; i >= 0; --i) {
    suffixes *= nums[i + 1];
    output[i] *= suffixes;
  }
  return output;
};

module.exports = productExceptSelf;
