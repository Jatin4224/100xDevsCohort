let reverse = function (x) {
  let xCopy = x;
  let rev = 0;
  x = Math.abs(x);
  while (x > 0) {
    last = x % 10;
    rev = rev * 10 + last;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);
  //let limit = 2**31;
  if (rev < -limit || rev > limit) return 0;

  return xCopy < 0 ? -rev : rev;
};

let result = reverse(321);
console.log(result);
