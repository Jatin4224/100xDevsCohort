var reverseString = function (s) {
  let len = s.length;
  let halfLen = Math.floor(len / 2);

  for (let i = 0; i < halfLen; i++) {
    //swap s[i] , s[len-i-1]
    let temp = s[i];
    s[i] = s[len - i - 1];
    s[len - i - 1] = temp;
  }
  return s;
};
let result = reverseString(["h", "e", "l", "l", "o"]);
console.log(result);
