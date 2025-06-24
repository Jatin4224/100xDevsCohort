//write a function that returns the count of digits in a number

//brute force

//if number 259 how can u count the number of digits?
//i will divide this number by 10
//it will give me 25 and reaminder 9 i will again divide this number by 10.it will give me 2 i will again divide it by 10 it will  give 0. so how many times this number is diviisble by 10? 3 times.
//so this is how we can calc

// Step 1:Initialise a counter to store the number of digits.
// n = 289;
// let count = 0;
// Step 2:While N is greater than 0, execute the following:
// while (n > 0) {
//   n = n / 10;
//   count++;
// }

//divide the number increase the count run again.
// Increment the counter by 1
// Update N by removing its last digit by performing a modulo 10 (%10) operation on it.

// Step 3:After exiting the while loop, we return the counter as the number of digits.
// return count;

//code
function countDigits(n) {
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

const num = 12200;
const result = countDigits(num);
console.log(result);

//in js
// n/10 gives value in decimal i dont want value in decimals
// so ill do Math.floor(n/10)
// what Math.floor is ?
// The Math.floor() method rounds a number downward to the nearest integer — meaning it removes anything after the decimal point and returns the largest integer less than or equal to the given number.

//corner cases
// 1 ) what is my n is 0?
function countDigits(n) {
  if (n === 0) return 1;
  let count = 0;
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

const num = 12200;
const result = countDigits(num);
console.log(result); // Output: 3

// 2) what is my n is negative?
//ill use math.abs() to change my n to postive number.

function countDigits(n) {
  if (n === 0) return 1;
  let count = 0;
  n = Math.abs(n);
  while (n > 0) {
    n = Math.floor(n / 10);
    count++;
  }
  return count;
}

const num = 12200;
const result = countDigits(num);
console.log(result); // Output: 3
