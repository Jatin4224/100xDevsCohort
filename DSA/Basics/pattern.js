//patterns
// Q) pattern 1
// *
// **
// ***
// ****
// *
// **
// ***
// ****
//I is responsible for how many number of rows i have.
//J is responsible for how many columns i have on the right side.
let n = 2;
for (let i = 0; i < n; i++) {
  let row = "";
  for (let j = 0; j < n; j++) {
    row = row + "*";
    console.log(row);
  }
}
// Q) pattern 2
// ****
// ****
// ****
// ****
let n1 = 4;
for (let i = 0; i < n1; i++) {
  let row = "";
  for (let j = 0; j < n1; j++) {
    row = row + "*";
  }
  console.log(row);
}

// Q) pattern 3
// *
// **
// ***
// ****
let n2 = 4;
for (let i = 0; i < n2; i++) {
  let row = "";
  for (let j = 0; j <= i; j++) {
    row = row + "*";
  }
  console.log(row);
}
//j <= n nd j < j+1 this both statements are same
// method 2
for (let i = 0; i < n2; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row = row + "*";
  }
  console.log(row);
}

// Q) pattern 4
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

let n4 = 5;

for (i = 0; i < n4; i++) {
  let row = "";
  for (j = 0; j <= i; j++) {
    row = row + (j + 1);
  }
  console.log(row);
}

//Q) pattern 5
// 1
// 22
// 333
// 4444
// 55555
let n6 = 5;
for (i = 0; i < n6; i++) {
  let row = "";
  for (j = 0; j <= i; j++) {
    row = row + (i + 1);
    //i doesnt change in a row
  }
  console.log(row);
}

//method 2
let n7 = 5;
for (i = 1; i < n7; i++) {
  let row = "";
  for (j = 1; j <= i; j++) {
    row = row + i;
    //i doesnt change in a row
  }
  console.log(row);
}

//Q)
// 1 2 3 4 5
// 1 2 3 4
// 1 2 3
// 1 2
// 1

for (i = 0; i < 5; i++) {}
