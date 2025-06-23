var singleNumber = function (nums) {
  let hash = {};

  for (let i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) {
      hash[nums[i]] = 1;
    } else {
      hash[nums[i]]++;
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (hash[nums[i]] == 1) {
      return nums[i];
    }
  }
};
// Method 2—Using XOR

// `a (xor) 0 = a`

// `a(xor) a = 0`

// **`a + b + b + a + c = c`**
