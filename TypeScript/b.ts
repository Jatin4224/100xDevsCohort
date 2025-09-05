// let cups: number;
// let cups = Math.random() > 0.5 ? 10 : 5;

// let chaiFlavour: string = "masala chai";
// chaiFlavour = "Kadak chai";
// chaiFlavour = 2231;
// console.log(chaiFlavour);

// let chaiOrder: number = 8;
// chaiOrder += 2;
// chaiOrder = "two";
// console.log(chaiOrder);

let subcribers: number | string = 10;
subcribers = 100000;
subcribers = "1million";

let theme: any = "chai theme";
theme: 20;
theme: true;
theme();
theme.toUpperCase();
console.log(theme);

const orders = ["12", "20", "28", "42"];
let currentOrder;

for (let order of orders) {
  if (order === "28") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);
