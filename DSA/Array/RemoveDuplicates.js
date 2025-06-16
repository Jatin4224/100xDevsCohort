// var removeDuplicates = function (nums) {
let nums = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 6];
let x = 0;
for (let i = 0; i < nums.length; i++) {
  if (nums[i] > nums[x]) {
    x = x + 1;
    nums[x] = nums[i];
  }
}
console.log(nums);
// };

// let result = removeDuplicates(nums);
// console.log(result);
