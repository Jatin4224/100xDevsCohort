let arr = [5, 3, 2, 0, 1];

function sum(n) {
  //base
  if (n == 0) {
    return arr[n];
  }
  //recursive call
  return arr[n] + sum(n - 1);
}

console.log(sum(arr.length - 1));

//sum of all odd numbers in an array
// isOdd = arr[n] %2 !=0 //isOdd true for odd numbers
// if(n==0) {
//     if(isOdd) {
//         return arr[n];
//         else return 0;
//     }
//     if(isOdd) {
//         return arr[n]+sum(n-1);

//     } else return 0+sum(n-1)
// }
