//Q1) write a function that searches for an element in an array and returns the index,if the element if not present than just return -1.

//approach 2
// function searchElement(arr, num) {
//   for (i = 0; i <= arr.length; i++) {
//     if (arr[i] == num) {
//       //   console.log(i);
//       return i;
//     }
//   }
//   return -1;
// }

// let arr = [1, 2, 3, 4, 5];
// let result = searchElement(arr, 3);
// console.log(result);
//approach 1

// for (i = 0; i <= arr.length; i++) {
//   let num = 6;
//   if (arr[i] == num) {
//     console.log(i);
//   } else {
//     console.log("not found");
//   }
// }

//Q2) write a function that returns the number of negative numbers in an array.

// function totalCount(arr) {
//   let count = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) {
//       count++;
//     }
//   }
//   return count;
// }

// let arr = [1, 2, 3, -1, -2, -3, -2];
// let result = totalCount(arr);
// console.log(result);

//Q3) write a function that returns the largest number in the array.
let arr = [5, 0, 10, 8, 17, 1];

function findLargest(arr) {
  let largest = -1;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let result = findLargest(arr);
console.log(result);

//assuming largest -1 is not a good practice because what is my array contains -numbers

let arr1 = [-9, -19, -4];
let res = findLargest(arr1);
console.log(res);

//soltn in javascript their is something known as infinity.there can be no number lesser than -Infinity.
//updated soltn
let arr2 = [5, 0, 10, 8, 17, 1];

function findLargest(arr) {
  let largest = -Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

let result2 = findLargest(arr2);
console.log(result2);

//you can also assume your largest number is arr[0]
//we can also check with first element.

//
