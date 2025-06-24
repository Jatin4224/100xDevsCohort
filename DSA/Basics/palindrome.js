//if the reverse of the number is equal to the number it will be the palindrome
// var isPalindrome = function(x) {
//      let rev = 0
//      while (x>0){
//         let rem = x % 10;
//         rev = (10*rev) + rem;
//         x = Math.floor(x/10); //removes decimal
//      }
//      if (rev === x){
//         return true;
//      } else {
//         return false;
//      }
// };

//now im using real x number so x is becoming a zero nd hwen we check rev == x here x is zero so we have to make a copy of the x to check it
// var isPalindrome = function(x) {
//
//     let xCopy = x;
//      let rev = 0
//      while (x>0){
//         let rem = x % 10;
//         rev = (10*rev) + rem;
//         x = Math.floor(x/10); //removes decimal
//      }
//      if (rev === xCopy){
//         return true;
//      } else {
//         return false;
//      }
// };

//we alos have to handle for a negative number
// var isPalindrome = function(x) {
//     if (x <0) return false;
//     let xCopy = x;
//      let rev = 0
//      while (x>0){
//         let rem = x % 10;
//         rev = (10*rev) + rem;
//         x = Math.floor(x/10); //removes decimal
//      }
//      if (rev === xCopy){
//         return true;
//      } else {
//         return false;
//      }
// };

//improved code

var isPalindrome = function (x) {
  if (x < 0) return false;
  let xCopy = x;
  let rev = 0;
  while (x > 0) {
    let rem = x % 10;
    rev = 10 * rev + rem;
    x = Math.floor(x / 10); //removes decimal
  }
  return rev === xCopy; //return true if equal
};
