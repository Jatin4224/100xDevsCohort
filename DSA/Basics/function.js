//to create a fucntion u have to start a keyword function with the function name followed by parenthese and curly braces.
//the task of the function is written inside this curly braces.
//then we need to call the function.
//Example 1
function printHello() {
  console.log("hello");
}

printHello();

//create a function greet passing value inside the function making function dynamic
function greet(name) {
  console.log("hello" + name);
}

greet("obito");
greet("sasuk");

//Task -> create a function that add two numbers.

function village(a, b) {
  let uchiha = a + b;
  console.log(uchiha);
}
village("sasuke", "sharingan");

function sum(a, b, c) {
  let add = a + b + c;
  console.log(add);
}

let a = 10;
let b = 20;
let c = 30;

sum(a, b, c);

//the function sq which gives u the square of the value.i want to return the value not print.

function sq(x) {
  let result = x * x;
  return result;
}

let value = sq(2);
console.log(value);

//lets create one more function which return cube of the value.
function cube(x) {
  let result1 = x * x * x;
  return result1;
}

let cube1 = cube(2);
console.log(cube1);

//How if else work;
//task write a function to check if the person is eligble to vote or not.it accepts the age.
function eligibleToVote(age) {
  if (age < 0) {
    console.log("not valid input");
  } else if (age < 18) {
    console.log("eligible to vote");
  } else {
    console.log("not eligible");
  }
}

eligibleToVote(20);
eligibleToVote(10);

//create a function if number is even or odd.

function isEvenOdd(num) {
  let rem = num % 2;
  if (rem == 0) {
    console.log("even");
  } else {
    console.log("odd number");
  }
}

isEvenOdd(7);
