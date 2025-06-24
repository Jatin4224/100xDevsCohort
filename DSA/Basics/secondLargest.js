//Find Second Largest numbr in an array.
//we will maintain two values first largest and the second largest.
//initially we set both of this value to -infinity.
function secondLargest(arr) {
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest;
}
let arr = [4, 9, 0, 2, 8, 7, 1];

let result = secondLargest(arr);
console.log(result);

//code improvements -thinking about the  corner cases.
//a corner case be what will if my array is empty?
//what if my array has only one element?

function secondLargest2(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest2;
}
let arr2 = [4, 9, 0, 2, 8, 7, 1];

let result2 = secondLargest2(arr);
console.log(result);

//what if your array has negative numbers?
//what is my array has duplicates? 10,10

// when ur checking with a secondLargest make sure its not equal to first largest

function secondLargest3(arr) {
  if (arr.length < 2) {
    return null;
  }
  let firstLargest = -Infinity;
  let secondLargest = -Infinity;

  for (i = 0; i < arr.length; i++) {
    if (arr[i] > firstLargest) {
      secondLargest = firstLargest;
      firstLargest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != firstLargest) {
      secondLargest = arr[i];
    }
  }
  return secondLargest3;
}
let arr3 = [4, 9, 0, 2, 8, 7, 1];

let result3 = secondLargest3(arr);
console.log(result);

//corner cases
// -array is empty.
// -array has -ve numbers.
// -array has duplicates.
//always think about corner cases.
//clarify it with your intervwer.
