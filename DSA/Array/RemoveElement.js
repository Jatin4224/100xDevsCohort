var removeElement = function (nums, val) {
  let x = 0;
  for (let i = 0; i < nums.length; i++) {
    //shift elements to left if it is not equal to val
    if (nums[i] !== val) {
      nums[x] = nums[i];
      x = x + 1;
    }
  }
  return x;
};

let result = removeElement([2, 3, 3, 2], 3);
console.log(result);
