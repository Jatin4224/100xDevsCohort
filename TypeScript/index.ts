// let coffe: boolean = "black";
// console.log(coffe);

// // TypeScript will give an error
// // if I try to assign a number or string to `coffee`.
// // For example:
// // coffee = 100;      ❌ Error
// // coffee = "black";  ❌ Error
// // Because the variable `coffee` is strictly typed as a boolean,
// // it can only accept `true` or `false` as values.

// //Create a variable of type string and stir in your favorite string method (e.g., .toUpperCase() or .includes()).

// // 1. Create a variable of type string and stir in your favorite string method (e.g., .toUpperCase() or .includes()).
// let chaiFlavour: string = "masala chai";
// chaiFlavour = chaiFlavour.toUpperCase();
// console.log(chaiFlavour);

// //2.
// let sugarCubes: number = 2;
// sugarCubes = sugarCubes + 3;
// console.log(sugarCubes);
// //3.
// let isChaiHot: boolean = true;
// let isChaiReady: boolean = false;

// let canServeChai: boolean = isChaiHot && isChaiReady;
// console.log(canServeChai);

// chaiFlavour = 42;
// sugarCubes = "five";
// isChaiHot = "yes";

// let Drink = "chai";

// let cups = Math.random() > 0.5 ? 10 : 5;

// let firstName = "Hitesh";

// firstName.length();

// let let, Name;

// console.Hiteshdotcom("Work hard, learn fast. If he can do it, you can too.");

// let channelName = "chai";
// channelName = true;

// let theme: any = "chai theme";
// theme: 20;
// theme: true;
// theme();
// theme.toUpperCase();
// console.log(theme);

// let subcribers: number | string = 10;
// subcribers = 100000;
// subcribers = "1million";

// let requestStatus: "pending" | "success" | "error" = "pending";
// requestStatus = "success";
// requestStatus = "error";
// requestStatus = "done";

// const orders = ["12", "20", "28", "42"];
// let currentOrder: string | undefined;

// for (let order of orders) {
//   if (order === "28") {
//     currentOrder = order;
//     break;
//   }
// }
// console.log(currentOrder);

// ## 🧠 Challenge

//Create a variable `chaiOrder` of type `'ordered' | 'brewing' | 'served'` and assign it the value `'ordered'`. Then,
//try assigning it the values `'brewing'` and `'served'`.

//Create a variable `chaiDiscount` of type `number | string` and assign it the value `30`. Then, try assigning it the value `'30%'`.

let chaiDiscount: number | string = 20;
chaiDiscount = "20%";
//chaiDiscount = true //typescript😡❌

let chaiOrder: "ordered" | "brewing" | "served" = "ordered";
chaiOrder: "served";
chaiOrder: "brewing";

function incomingCall(num: number) {
  return num + 1;
}

const callsReceived = incomingCall(2);
console.log(callsReceived);

const outgoingCall = (a: number, b: number) => a * b;
const callsDialed = outgoingCall(2, 1, 3);
console.log(callsDialed);

function namaste(person: string = "Hitesh") {
  return `Namaste ${person}`;
}

const res = namaste();
console.log(print);
