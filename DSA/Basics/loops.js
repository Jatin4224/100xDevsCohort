// print hello world 19times
for (let i = 0; i < 20; i++) {
  console.log("hello world");
}

for (let i = 2; i < 10; i = i + 2) {
  console.log(i);
}

//reverse loop
for (i = 5; i > 0; i = i - 1) {
  console.log("Hello world");
}

//what is the output?
for (i = 5; i < 5; i++) {
  console.log("hello");
}

//how array nd loops work together
let arr = [10, 2, 4, 5, 3];
//there is an function given by jaavscript length
let length = arr.length;
console.log(length); //op-5 means 5elements in this array

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

for (let i = 0; i < length; i++) {
  console.log(arr[i]);
}

//print all the even numbers in the array.
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 == 0) {
    console.log(arr[i]);
  }
}
//while loop
let i = 0;
while (i < 5) {
  //this is body of loop
  console.log(hello);
  i++;
}
